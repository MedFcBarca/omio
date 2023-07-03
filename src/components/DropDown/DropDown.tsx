import React, { useEffect, useRef, useContext } from "react";
import { TripTypeContext } from "../../context/TripTypeContext"

function DropDown(props: any) {
  const dropDownLabellRef = useRef(null)
  const [Opened, setOpened] = React.useState(false);
  const [Passengers, setPassengers] = React.useState([
    { name: "Adult", number: 1, ageRange: "26+ years", id: 0 },
    { name: "Youth", number: 1, ageRange: "0-25 years", id: 1 },
    { name: "Senior", number: 1, ageRange: "58+ years", id: 2 }
  ]);
  const tripType = useContext(TripTypeContext)
  ChangeOpenedState(dropDownLabellRef, Opened)

  //Close if outside Click
  function ChangeOpenedState(ref: any, Opened: boolean) {
    useEffect(() => {
      // Function for click event
      function handleOutsideClick(event: any) {
        if (ref.current && !ref.current.contains(event.target) && Opened) {
          setOpened(false)
        }
      }
      // Adding click event listener
      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref, Opened]);
  }

  const IncrementPassengerNumber = (PassengerId: number, PassengerNumber: number, PassengerName: string) => {
    setPassengers((prevPassengers) => {
      const updatedPassengers = prevPassengers.map((passenger) => {
        if (passenger.id === PassengerId) {
          return { ...passenger, number: PassengerNumber }; // Update the number of adult passengers
        }
        return passenger;
      });
      return updatedPassengers;
    });
    if (PassengerNumber > 0) {
      const DecrementButton = (document.getElementById(PassengerName) as HTMLButtonElement)
      DecrementButton.disabled = false
      DecrementButton.style.borderColor = "rgb(94, 144, 204)"
      DecrementButton.style.color = "rgb(94, 144, 204)"
    }
  }
  const DecrementPassengerNumber = (PassengerId: number, PassengerNumber: number, PassengerName: string) => {
    setPassengers((prevPassengers) => {
      const updatedPassengers = prevPassengers.map((passenger) => {
        if (passenger.id === PassengerId) {
          return { ...passenger, number: PassengerNumber }; // Update the number of adult passengers
        }
        return passenger;
      });
      return updatedPassengers;
    });
    if (PassengerNumber === 0) {
      const DecrementButton = (document.getElementById(PassengerName) as HTMLButtonElement)
      DecrementButton.disabled = true
      DecrementButton.style.borderColor = "grey"
      DecrementButton.style.color = "grey"
    }
  }

  if (props.label === "passengers") {
    //render passengers
    return (
      <div className="DropDownContainer" onClick={() => { setOpened(!Opened); }} ref={dropDownLabellRef}>
        <div className="DropDownContainer-Label">
          {
            Passengers[0].number !== 1 && Passengers[1].number === 0 && Passengers[2].number === 0
              ? Passengers[0].number + " Adults, No discount card"
              : Passengers[0].number === 1 && Passengers[1].number === 0 && Passengers[2].number === 0
                ? "1 Adult, No discount card"
                : Passengers.reduce((a, b) => a + b.number, 0) + " Passengers, No discount card"
          }
          <span className={Opened ? " Transform" : "noTransform"} id="Arrow"> &gt; </span>
        </div>
        <div className={Opened ? "OpenOptions" : "CloseOptions"} id="PassengerOption">
          {Passengers.map((Passenger) => (
            <div key={Passenger.id} className="PassengerOptionContainer">
              <div className="nameAgeRange">
                <h3> {Passenger.name}</h3>
                <span> {Passenger.ageRange}</span>
              </div>
              <div className="passengerSelection">
                <button id={Passenger.name} onClick={() => { DecrementPassengerNumber(Passenger.id, --Passenger.number, Passenger.name) }}> - </button>
                <span className="passengerNumberDisplay"> {Passenger.number} </span>
                <button onClick={() => { IncrementPassengerNumber(Passenger.id, ++Passenger.number, Passenger.name) }}> + </button>
              </div>
              <div className="underline"></div>
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    //render trip
    return (
      <div className="DropDownContainer" onClick={() => { setOpened(!Opened); }} ref={dropDownLabellRef}>
        <div className="DropDownContainer-Label" data-testid="SelectLabel">
          {props.label}
          <span className={Opened ? " Transform" : "noTransform"} id="Arrow"> &gt; </span>
        </div>
        <div className={Opened ? "OpenOptions" : "CloseOptions"} id="TripOption" >
          <div role="InitialOption" data-testid="Option" className={props.label === "One-way" ? "selectedOption" : "notSelectedOption"} id="OneWayOption" onClick={() => tripType.setTripType({ selectedTripType: "One-way" })}>
            {props.label === "One-way" ? "\u2713" : ""} One-way
          </div>
          <div data-testid="Option" className={props.label === "Round trip" ? "selectedOption" : "notSelectedOption"} id="RoundTripOption" onClick={() => tripType.setTripType({ selectedTripType: "Round trip" })}>
            {props.label === "Round trip" ? "\u2713" : ""} Round trip
          </div>
        </div>
      </div>
    )
  }
}

export default DropDown;