
import * as React from 'react';
import currencyFormatter from "../helpers/currencyFormatter";
import {navigationContext} from "../app"; //exported from app.js

//Create another component that will display list of houses.
//This component called "House" encapsulates the task of displaying 
//each 'house' record

/*
   Finally, the HouseRow component uses the incoming callback handler as a 
   function in a new handler. In this handler, we will pass the specific 
   item to it. Moreover, an additional button element is needed to trigger 
   the actual event:

   One popular solution is to use an inline arrow function, 
   which allows us to sneak in arguments like the item:
   <button type="button" onClick={() => onRemoveItem(item)}> 
        Dismiss
   </button>
 
  */
const HouseRow = ({house, onRemoveItem, selectHouse, selectedHouseSetter}) => {
    //selectedHouseSetter is the updater function. When a row 
    //in the table is clicked this HouseRow calls the "Callback" wrapper 
    //function defined in app.jsx     
    // const setSelectedHouseWrapper = (house) => {
    //    setSelectedHouse(house); <= updates the state in line 473
    //   }
    //but is now pointing to: setSelectedHouseWrapper() callback function 
    //in App.JS to preserve state in app.JS
   
    //destructure the "navigate" function out
    //"navigate" became part of the context because of:
    //  <navigationContext.Provider value={navState}>
    //navState now contains the "navigate" function
    const {navigate} = useContext(navigationContext);

    // <td onClick={() => selectedHouseSetter(house)}>

    <tr> 
     <td onClick={() => navigate(navValues.house)}> 
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