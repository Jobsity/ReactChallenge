import React from "react";

import PropTypes from "prop-types";


import moment from "moment";
import MomentHelper from "../Util/momentHelper";
import { useSelector } from "react-redux";

function DayList({ date, changeDay }) {

  return (
    <div> {
      getDays(date, changeDay)
    }
    </div>
  );
}

function getDays(date, changeDay) {
  let days = [];

  for (let i = 1; i <= MomentHelper.getDaysInMonth(date); i++) {
    days.push(<option value={i}>{i}</option>)
  }
  return (
    <div>
      <select className="labelMonth" value={MomentHelper.getDay(date)} onChange={(e) => changeDay(e.target.value)}>
        {days}
      </select>
    </div>)
}


DayList.propTypes = {
};
export default DayList;