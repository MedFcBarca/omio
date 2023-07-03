import React, { useContext, useEffect } from "react"
import { TripTypeContext } from "../../context/TripTypeContext";

//change yyyy-mm-dd to DDD, MMM YY
export function ChangeFormat(inputString: any){
    const inputDate = new Date(inputString)
    const formattedDate = inputDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    console.log(formattedDate)
    return formattedDate
}

function DateRange() {
    const FromDate = new Date()  
    FromDate.setDate(FromDate.getDate() + 1);
    const formattedDate = FromDate.toISOString().split("T")[0];
    FromDate.setDate(FromDate.getDate() + 6);
    const formattedDateWeekLater = FromDate.toISOString().split("T")[0];
    const tripType =  useContext(TripTypeContext)

    const [DepartureDateInput, setDepartureDateInput] = React.useState(ChangeFormat(formattedDate))
    const [LeavingDateInput, setLeavingDateInput] = React.useState(ChangeFormat(formattedDateWeekLater))

    useEffect(() => {
        console.log(DepartureDateInput)
    },[DepartureDateInput])


    return(
        <div className="DateContainer">
            <div className="ArrivalDateContainer">
                <i className="fa-regular fa-calendar"></i>
                <input className="DateInput" type="date" min={formattedDate} onChange={(e) => setDepartureDateInput(ChangeFormat(e.target.value))}/>
                <div className="dateLabel" data-testid="departureDateLabel">
                    {DepartureDateInput}
                </div>
            </div>
            <div className="LeavingDateContainer">
                <div className="dateLabel" id="returnDateLabel" data-testid="returnDateLabel">
                    {tripType.TripType?.selectedTripType === "Round trip"
                        ? <div>
                            <input className="DateInput" min={formattedDate} type="date" id="LeavingDate" onChange={(e) => setLeavingDateInput(ChangeFormat(e.target.value))}/> 
                            <div className="dateLabel"> 
                                {LeavingDateInput} 
                            </div>
                        </div> 
                        : <div data-testid="addReturn" className="addReturn" onClick={() => tripType.setTripType({selectedTripType: "Round trip"})}>
                            + Add return
                        </div> 
                    }
                </div>
            </div>
        </div>
    )
  }
  
  export default DateRange;