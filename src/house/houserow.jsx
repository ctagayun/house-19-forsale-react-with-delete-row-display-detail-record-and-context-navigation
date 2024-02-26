import * as React from 'react';
//import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import navValues from "../helpers/navValues";
import { navigationContext } from "/src/app"; //exported from app.js

const HouseRow = ({house, onRemoveItem}) => {
   
   console.log("House Row fired")
   const myHouse = JSON.stringify(house);
   console.log("House prop = " + myHouse);
    //Call useContext on the navigationContext.
    //This returns the state "object" consisting of 
    //    navTo 
    //    navigate
    //  setNavState({current:navTo, navigate})
    //we passed setNavState. (See line 304 inApp.jsx)

    //Since an object is returned (state) instead of a single
    //variable, we need to destructure "navigate" so that we 
    //can access its properties 
    const {navigate} = React.useContext(navigationContext);

    //After destructuring we can call navigate(): 
    //   navigate(navValues.housedetail, housedetail)}
    //     1. navValues.housedetail key-value pair points to 
    //        HouseDetail component
    //     2. housedetail the second parameter points to an INSTANCE
    //        of HouseDetail component that we want to display
    
    return(
    <tr> 
      <td onClick={() => navigate(house)}> 
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
     );
    };

//Memoizing is way to cache the output of JSX component 
//so that it doesn't re-render. It is done by wrapping the 
//component with React.memo hook
const HouseRowMemoized = React.memo(HouseRow)

export default HouseRow;
//exporting the memoized version will let you use that 
//version in the HouseList
export {HouseRowMemoized}; 