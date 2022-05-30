import React from "react";

import PropTypes from "prop-types";


import moment from "moment";
import MomentHelper from "../Util/momentHelper";
import { useSelector } from "react-redux";

function MonthList({date, changeMonth}) {

  //const currentDate = useSelector((state) => state.dateReducer);
  //const date = MomentHelper.getDateFromObject(currentDate);
  return (
    <div> {
      getMonths(date,changeMonth)
    }
      </div>
  );
}

function getMonths(date,changeMonth) {
  let months = moment.months().map((data,index) => {
    return (
        <option value={index + 1}>{data}</option>
    );
  });
  return (
    <div>
    <select className="labelMonth" value={MomentHelper.getMonth(date)} onChange={(e) => changeMonth(e.target.value)}>
    {months}
    </select> 
    </div>)
}


MonthList.propTypes = {
    currentMonth: PropTypes.number,
};
export default MonthList;