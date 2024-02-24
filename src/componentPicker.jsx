import navValues from "./helpers/navValues";
import HouseList from './house/houseList';
import Search from './house/search';
import HouseDetail from './house/housedetail';

const ComponentPicker = ({ currentNavLocation, 
                           list, 
                           onRemoveHouse, 
                           onAddHouse, 
                           onSelectHouse, 
                           selectedHouseSetter }) => {
  const myCurrNavLoc = JSON.stringify(currentNavLocation);
  console.log("CurrentNavLocation = " + myCurrNavLoc);

  const myList = JSON.stringify(list);
  console.log("MyList of Searched Stories = " + myList);
  
  const myonRemoveHouse = JSON.stringify(onRemoveHouse);
  console.log("myonRemoveHouse = " + myonRemoveHouse);

  const myonAddHouse = JSON.stringify(onAddHouse);
  console.log("myonAddHouse = " + myonAddHouse);

  const myononSelectHouse = JSON.stringify(onSelectHouse);
  console.log("myononSelectHouse = " + myononSelectHouse);

  const myonselectedHouseSetter = JSON.stringify(selectedHouseSetter);
  console.log("myonselectedHouseSetter = " + myonselectedHouseSetter);

  switch (currentNavLocation) {
    case navValues.houselist:
      return <HouseList 
            list={list} 
            onRemoveHouse={onRemoveHouse} 
            onAddHouse={onAddHouse} 
            onSelectHouse={onSelectHouse}
            selectedHouseSetter = {selectedHouseSetter}
      />; 

    case navValues.housedetail:
      return <HouseDetail />; //needs Props
    default:
      return (
        <h3>
          No component for navigation value
          {currentNavLocation} found.  
        </h3>
      );
  }
};


export default ComponentPicker;
