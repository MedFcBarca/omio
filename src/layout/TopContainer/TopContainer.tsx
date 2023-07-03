import { useContext} from "react";
import DropDown from "../../components/DropDown/DropDown";
import { TripTypeContext } from "../../context/TripTypeContext";


function TopContainer() {
  const tripType =  useContext(TripTypeContext)
  
    return (
        <div className="TopContainer">
          <DropDown label={tripType.TripType?.selectedTripType} />
          <DropDown label="passengers"/>
        </div>
    );
  }
  
  export default TopContainer;