import React from "react";
import PropTypes from "prop-types";
import CalendarHeader from "./CalendarHeader";
import MomentHelper from "../Util/momentHelper";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../actions";

function CalendarDay({ date, differentMonth }) {

  const day = MomentHelper.getDay(date);
  const currentDate = useSelector((state) => state.dateReducer);
  const selectedDate = MomentHelper.getDateFromObject(currentDate);
  const dispatch = useDispatch();

  const changeDate = date => {
    const year = MomentHelper.getYear(date);
    const month = MomentHelper.getMonth(date);
    const day = MomentHelper.getDay(date);

    const newdate = dispatch(setDate(year, month, day))
    //const newdate = MomentHelper.getDate(2022,month,28)

    //SetCurrentDate(newdate);
  }
  return (
    <td
      key={day}
      className={"day " + checkWeekend(date) + checkDifferentMonth(differentMonth) + checkToday(date) + checkSelectedDay(date, selectedDate)}
      onClick={(e) => {
        changeDate(date)
      }}
    >
      <span>{day}</span> <span></span>
    </td>
  );
}
function checkWeekend(date) {
  let currentDay = MomentHelper.getWeekday(MomentHelper.getPrevDay(date))
  let currentWeekDay = MomentHelper.getWeekday(date);
  return currentWeekDay != 0 && currentWeekDay != 6 ? "" : "weekend ";
};

function checkDifferentMonth(differentMonth) {
  return differentMonth ? "otherMonth " : ""
}
function checkToday(date) {
  return MomentHelper.compareDates(date, moment()) ? "today " : ""
}
function checkSelectedDay(date, selectedDate) {

  return MomentHelper.compareDates(date, selectedDate) ? "selectedDay " : ""
}
CalendarDay.propTypes = {
};

export default CalendarDay;
