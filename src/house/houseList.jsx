
import * as React from 'react';
import HouseRow  from './houserow';
//import { HouseRowMemoized } from './houserow';

//We are not using selectedHouseSetter in HouseList. We just 
//want to pass it as props to HouseRow
const HouseList = ({list, onRemoveHouse, onAddHouse, onSelectHouse}) =>
    {
      const mySearchHouses = JSON.stringify(list);
      console.log("SearchedHouses = " + mySearchHouses );
      return (
          <>
            <div className="row mb-2">
              <h5 className="themeFontColor text-center">
                Houses currently on the market
              </h5>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ObjectID</th>
                  <th>Address</th>
                  <th>Country</th>
                  <th>Asking Price</th>
                </tr>
              </thead>
              <tbody>
                {list.map((record) => ( 
                  //first time in list has already been populated by useState
                  //Instantiate the HouseRow component and pass each record
                  //to HouseRow component as props. Pass the delete record 
                  //handler "onRemoveItem" to HouseRow component.
                  //<HouseRow - by using the memoized version only the 
                  //added house will be rendered
                  //<HouseRowMemoized
                  <HouseRow
                      key={record.objectID}
                      objectID={record.objectID} 
                      house={record}  
                      onRemoveItem = {onRemoveHouse} //contains the onRemoveItem handler
                      onSelectHouse={onSelectHouse}
                     
                  />
                ))}
              </tbody>
            </table>
            <button className="btn btn-primary" onClick={onAddHouse}>
              Add
            </button>
          </>
        );
  };

export default HouseList;
