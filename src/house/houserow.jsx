
import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import navValues from "../helpers/navValues";
import {navigationContext} from "./app"; //exported from app.js

const HouseRow = ({house, onRemoveItem}) => {
   
    //Call useContext on the navigationContext.
    //This returns the state "object" consisting of 
    //    navTo 
    //    navigate
    //  setNavState({current:navTo, navigate})
    //we passed etNavState. (See line 304 inApp.jsx)

    //This returns the state "object. Therefore destructure
    //"navigate" so that we can access its properties 
    const {navigate} = useContext(navigationContext);

    //after destructuring we can do this:  navigate(navValues.housedetail)}
    //navValues.housedetail points to HouseDetail component
    //housedetail point to the instance of HouseDetail
    <tr> 
     <td onClick={() => navigate(navValues.housedetail, housedetail)}> 
         <a>{house.objectID} </a> 
      </td>  
     <td>{house.address}</td>
     <td>{house.country}</td>
    
     { 
     house.price && (
     <td className={`${house.price >= 500000 ? "text-primary" : ""}`}> 
       {currencyFormatter.format(house.price)}
     </td>
     )
     }
     <td>
     <span>
      <button className="btn btn-primary" type="button" onClick={() => onRemoveItem(house)}>
        Delete
      </button>
    </span>
     </td>
    </tr>
  
    };

//Memoizing is way to cache the output of JSX component 
//so that it doesn't re-render. It is done by wrapping the 
//component with React.memo hook
const HouseRowMemoized = React.memo(HouseRow)

export default HouseRow;
//exporting the memoized version will let you use that 
//version in the HouseList
export {HouseRowMemoized}; 