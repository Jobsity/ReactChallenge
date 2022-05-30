import React from "react";

import PropTypes from "prop-types";


import moment from "moment";
import MomentHelper from "../Util/momentHelper";
import { useSelector } from "react-redux";
import citiesList from "../mocks/cities";

function CityList({city, changeCity}) {

    
  return (
    <div> {
      getCities(city,changeCity)
    }
      </div>
  );
}

function getCities(city,changeCity) {

  let cities = [];
    for(let i = 0; i < citiesList.length;i++) {
        cities.push(<option value={citiesList[i].code}>{citiesList[i].name}</option>)
    }
  return (
    <div>
    <select className="labelMonth" value={city} onChange={(e) => changeCity(e.currentTarget.value)}>
    {cities}
    </select> 
    </div>)
}


CityList.propTypes = {
};
export default CityList;