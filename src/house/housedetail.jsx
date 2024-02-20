/*
  Host this component in app.js. Display this component 
  conditionally (display houselist or this component)
*/

import currencyFormatter from "../helpers/currencyFormatter";
import defaultPhoto from "../images/defaultPhoto";

const HouseDetail = ({ house, onClick }) => {
  const myHouse = JSON.stringify(house);
  console.log("House Detail house Props = " + myHouse);
  return (
    <div>
      <div className="row">
        <div className="col-6">
         <div className="row">
          <img
            className="img-fluid"
            src={
              house.photo ? `./src/images/houseImages/${house.photo}.jpeg` : defaultPhoto
            }
            alt="House pic"
          />
        </div>
        </div>
        <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{house.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-12">{house.address}</h3>
        </div>
        <div className="row">
          <h2 className="themeFontColor col-12">
            {currencyFormatter.format(house.price)}
          </h2>
        </div>
        <div className="row">
          <div className="col-12 mt-3">{house.description}</div>
        </div>
        </div>

       <div className="row">
       </div>
       <div className="row">
          <div className="col-1">
          <button className="btn btn-success btn-sm float-right"
              type="btn" >
                Cancel 
          </button>
         </div>  
       </div>
    </div>
      
    </div>
    
  );
};

export default HouseDetail;
