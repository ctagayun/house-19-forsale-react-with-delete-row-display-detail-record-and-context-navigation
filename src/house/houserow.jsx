
import * as React from 'react';
import currencyFormatter from "../helpers/currencyFormatter";
import {navigationContext} from "../app"; //exported from app.js

const HouseRow = ({house, onRemoveItem, onSelectHouse}) => {
   
    //destructure the "navigate" function out
    //"navigate" became part of the context because of:
    //  <navigationContext.Provider value={navState}>
    //navState now contains the "navigate" function

    //Call useContext on the navigationContext as
    //parameter. This returns the state "object"
    //we passed in the context by calling setNavState.
    // See line 304 inApp.jsx
    // const navigate = React.useCallback(
    //  (navTo) => setNavState({current:navTo, navigate}),

    //This returns the state "object. Therefore Destructure
    //" navigate" so that we can access its properties 
    const {navigate} = useContext(navigationContext);

    //after destructuring we can do this:  navigate(navValues.house)}
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