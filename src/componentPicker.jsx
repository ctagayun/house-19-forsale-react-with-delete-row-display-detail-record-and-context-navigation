import navValues from "./helpers/navValues";
import HouseList from './house/houseList';
import Search from './house/search';
import HouseDetail from './house/housedetail';

const ComponentPicker = ({ currentNavLocation }) => {
  switch (currentNavLocation) {
    case navValues.houselist:
      return <HouseList />; //needs props
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
