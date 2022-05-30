import React from "react";

import PropTypes from "prop-types";


import moment from "moment";
import MomentHelper from "../Util/momentHelper";
import { useSelector } from "react-redux";

function TimeList({currentTime, timeChanged}) {
  
  const [currentHour, SetCurrentHour] = React.useState(currentTime.split(":")[0]);
  const [currentMinute, SetCurrentMinute] = React.useState(currentTime.split(":")[1]);

  const updateHour = (hour) => {
    updateTime(parseInt(hour),currentMinute)
  }
  const updateMinute = (minute) => {
    updateTime(currentHour,parseInt(minute))
  }
  const updateTime = (hour,minute) => {
    SetCurrentHour(hour);
    SetCurrentMinute(minute)
    timeChanged(hour,minute)
  }

  return (
    <div> {
      getHours(currentHour,updateHour)
    }:{
      getMinutes(currentMinute,updateMinute)
    }
      </div>
  );
}

function getHours(currentHour, updateHour) {
  let hours = [];

    for(let i = 0; i < 24;i++) {
        hours.push(<option value={i}>{i.toString().padStart(2,"0")}</option>)
    }
  return (
    <span>
    <select className="labelTime" value={currentHour} onChange={(e) => updateHour(e.target.value)}>
    {hours}
    </select> 
    </span>)
}

function getMinutes(currentMinute,updateMinute) {
  let hours = [];

    for(let i = 0; i < 60;i++) {
        hours.push(<option value={i}>{i.toString().padStart(2,"0")}</option>)
    }
  return (
    <span>
    <select className="labelTime" value={currentMinute} onChange={(e) => updateMinute(e.target.value)}>
    {hours}
    </select> 
    </span>)
}


TimeList.propTypes = {
};
export default TimeList;