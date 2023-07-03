import React, {useContext, useEffect } from "react"
import { DepartureContextCreate } from "../../context/DepartureContext" 

function SearchDestination() {
    const [Suggestions, setSuggestions] = React.useState([{name: "paris", id: 0}])
    const DepartureContext = useContext(DepartureContextCreate)
    useEffect(() => {
        if(DepartureContext.Departure?.city !== ""){
            fetch(`https://api.comparatrip.eu/cities/popular/from/${DepartureContext.Departure?.city}/5`)
            .then(response => response.json())
            .then((data) => {
                if(data.length !== 0){
                    const suggestionTemplate = data.map((obj: any) =>
                        {return {name: obj.unique_name, id: obj.id}})
                    setSuggestions(suggestionTemplate)
                }
            })
            .catch(function (error) {
                console.log("ERROR: cities not found " + error.status)
            })
        }
    },[DepartureContext.Departure])
  
    return (
        <div className="SearchDestination">
            <i className="fa-solid fa-location-dot"></i>
            <input className="destinationInput" type="text" placeholder="To: City, Station Or Airport" list="DestinationList"/>
            <datalist id="DestinationList">
                {DepartureContext.Departure
                ? Suggestions.map((Suggestion) => 
                    <option className="suggestionOption" key={Suggestion.id} value={Suggestion.name.charAt(0).toUpperCase() + Suggestion.name.slice(1)} > 
                        {Suggestion.name.charAt(0).toUpperCase() + Suggestion.name.slice(1)} 
                    </option>
                )
                : <div></div>
                }
            </datalist>
        </div>
    );
  }
  
  export default SearchDestination;