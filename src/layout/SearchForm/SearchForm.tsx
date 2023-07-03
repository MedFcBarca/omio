import DateRange from "../../components/DateRange/DateRange";
import SearchDeparture from "../../components/SearchDeparture/SearchDeparture";
import SearchDestination from "../../components/SearchDestination/SearchDestination";
import { DepartureContextProvider } from "../../context/DepartureContext";

function SearchForm() {
  
    return (
        <DepartureContextProvider>
            <div className="SearchForm">
                <SearchDeparture />
                <SearchDestination />
                <DateRange />
                <input type="submit" className="SubmitButton" value="Search"/>
            </div>
        </DepartureContextProvider>
    );
  }
  
  export default SearchForm;