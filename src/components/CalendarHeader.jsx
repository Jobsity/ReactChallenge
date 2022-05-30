import React from "react";

import PropTypes from "prop-types";

import Button from "./Button";

import moment from "moment";
import MonthNav from "./MonthNav";
import YearNav from "./YearNav";
import MomentHelper from "../Util/momentHelper";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../actions";

function CalendarHeader() {
  const currentDate = useSelector((state) => state.dateReducer);
  const date = MomentHelper.getDateFromObject(currentDate);
  const currentMonth = MomentHelper.getMonth(date);
  const dispatch = useDispatch();

  const updateMonth = (newdate) => {

    dispatch(setDate(MomentHelper.getYear(newdate), MomentHelper.getMonth(newdate), MomentHelper.getDay(newdate)))
    //updateMonth(month);
  }

  const changeYear = year => {
    dispatch(setDate(parseInt(year), currentDate.month, currentDate.day))
  }

  return (
    <React.Fragment>
      <tr>{weekdayName()}</tr>
      <thead>
        <tr className="calendarHeader">
          <td colSpan={1} className="navMonth header">
            <div
              className="prev"
              onClick={(e) => {
                //this.prevMonth();
                updateMonth(MomentHelper.getPrevMonth(date))
                //checkUpdateMonth(currentMonth-1);
              }}
            >
              {"<"}
            </div>
          </td>
          <td colSpan={4} className="header">
            <MonthNav date={date} />
          </td>
          <td colSpan={1} className="navMonth header">
            <div
              className="next"
              onClick={(e) => {
                //this.nextMonth();
                updateMonth(MomentHelper.getNextMonth(date));
              }}
            >
              {">"}
            </div>
          </td>
          <td colSpan={1} className="header">
            <YearNav date={date} changeYear={changeYear} />
          </td>
        </tr>
      </thead>
    </React.Fragment>
  );
}

CalendarHeader.propTypes = {
  limit: PropTypes.number,
};
function weekdayName() {
  return moment.weekdays().map((day) => {
    return (
      <td key={day} className="weekDay">
        {day}
      </td>
    )
  });
}


export default CalendarHeader;
