import navValues from "../helpers/navValues";
import HouseList from '../src/house/houseList';
import Search from '../src/house/search';
import HouseDetail from '../src/house/housedetail';
import navValues from "../src/helpers/navValues"; //Step 1 - define nav structure

const ComponentPicker = ({ currentNavLocation }) => {
  switch (currentNavLocation) {
    case navValues.home:
      return <HouseList />;
    case navValues.house:
      return <HouseDetail />;
    default:
      return (
        <h3>
          No component for navigation value
          {currentNavLocation} found
        </h3>
      );
  }
};

export default ComponentPicker;
