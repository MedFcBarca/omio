import React, { useEffect, useRef, useContext } from "react"
import { DepartureContextCreate } from "../../context/DepartureContext" 

function SearchDeparture() {

    const [Suggestions, setSuggestions] = React.useState([{name: "paris", id: 0}])
    const DepartureContainer = useRef(null)
    const DepartureContext = useContext(DepartureContextCreate)
    AutoSelect(DepartureContainer)
    
    function suggestionFromInput(e: any){
        fetch(`https://api.comparatrip.eu/cities/autocomplete/?q=${e.target.value}`)
        .then(response => response.json())
        .then((data) => {
            if(data.length !== 0){
                const suggestionTemplateFromInput = data.map((obj: any) =>
                    {return {name: obj.unique_name, id: obj.city_id}})
                setSuggestions(suggestionTemplateFromInput)
            }
        })
        .catch(function (error) {
            console.log("ERROR: cities not found " + error)
        })
    }

    function popularCities(e: any){
        if(e.target.value === ""){
            fetch(`https://api.comparatrip.eu/cities/popular/5`)
            .then(response => response.json())
            .then((data) => {
                if(data.length !== 0){
                    const popularSuggestionTemplate = data.map((obj: any) =>
                        {return {name: obj.unique_name, id: obj.id}})
                    setSuggestions(popularSuggestionTemplate)
                }
            })
            .catch(function (error) {
                console.log("ERROR: cities not found " + error)
            })
        } 
    }

    function AutoSelect(ref: any){
        const departureInputAutoSelect = (document.getElementById("departureInputAutoSelect") as HTMLInputElement)
        useEffect(() => {
            // Function for click event
            function handleOutsideClick(event: any) {
              if (!ref.current.contains(event.target) && Suggestions[0].name !== undefined && departureInputAutoSelect && Suggestions ) {
                departureInputAutoSelect.value = Suggestions[0].name.charAt(0).toUpperCase() + Suggestions[0].name.slice(1);
                DepartureContext.setDeparture({city: Suggestions[0].name})
              }
            }
            // Adding click event listener
            document.addEventListener("click", handleOutsideClick);
            return () => document.removeEventListener("click", handleOutsideClick);
          }, [ref, Suggestions]);
    }
  
    return (
        <div className="SearchDeparture" ref={DepartureContainer}>
            <div className="Circle"></div>
            <input id="departureInputAutoSelect" autoComplete="on" className="departureInput" type="text" placeholder="From: City, Station Or Airport" list="DepartureList" onKeyUp={(e) => {suggestionFromInput(e)}} onClick={(e) => {popularCities(e)}}/>
            <datalist id="DepartureList">
                {Suggestions.map((Suggestion) => 
                    <option className="suggestionOption" key={Suggestion.id} value={Suggestion.name.charAt(0).toUpperCase() + Suggestion.name.slice(1)} > 
                        {Suggestion.name.charAt(0).toUpperCase() + Suggestion.name.slice(1)} 
                    </option>
                )}
            </datalist>
        </div>
    );
  }
  
  export default SearchDeparture;