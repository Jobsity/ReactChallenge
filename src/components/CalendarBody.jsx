import React from "react";
import PropTypes from "prop-types";
import CalendarHeader from "./CalendarHeader";
import CalendarDay from "./CalendarDay";
import MomentHelper from "../Util/momentHelper";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

function CalendarBody() {
  const currentDate = useSelector((state) => state.dateReducer);
  const dispatch = useDispatch();
  const date = MomentHelper.getDateFromObject(currentDate);
  //const currentMoment = MomentHelper.getDate(year,month+1,day);

  const calendarDays = getCalendarDays(date);

  return (
    <React.Fragment>
      {calendarDays}
    </React.Fragment>
  );
}
function getCalendarDays(currentMoment) {
  const daysBeforeMonth = getDaysBeforeMonth(currentMoment);
  const daysOfMonth = getDaysMonth(currentMoment);
  const daysAfterMonth = getDaysAfterMonth(currentMoment);

  const days = [...daysBeforeMonth, ...daysOfMonth, ...daysAfterMonth]
  let rows = [];
  let cells = [];
  days.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      let insertRow = cells.slice();
      rows.push(insertRow);
      cells = [];
      cells.push(row);
    }
    if (i == days.length - 1) {
      let insertRow = cells.slice();
      rows.push(insertRow);
    }
  });
  let trElems = rows.map((d, i) => {
    return <tr key={i * 100}>{d}</tr>;
  });
  return trElems;
}
function getDaysBeforeMonth(currentMoment) {
  let days = [];
  const prevMonth = MomentHelper.getPrevMonth(currentMoment);
  const daysInMonth = MomentHelper.getDaysInMonth(prevMonth)
  const month = MomentHelper.getMonth(prevMonth);
  const year = MomentHelper.getYear(prevMonth);
  for (let i = 1; i <= MomentHelper.getFirstDayMonth(currentMoment); i++) {
    const lastDay = daysInMonth + 1 - i;
    days.push(
      <CalendarDay date={MomentHelper.getDate(year, month, lastDay)} differentMonth={true}
      //month={MomentHelper.getMonth(prevMonth)} year={MomentHelper.getYear(prevMonth)} day={lastDay}
      />
    );
  }
  days.reverse();
  return days;
}
function getDaysMonth(currentMoment) {
  let days = [];
  const daysInMonth = MomentHelper.getDaysInMonth(currentMoment);
  const month = MomentHelper.getMonth(currentMoment);
  const year = MomentHelper.getYear(currentMoment);
  for (let i = 1; i <= daysInMonth; i++) {
    //let className = (i == this.currentDay() ? "day currentDay selectedDay ": "day ") + this.checkWeekend(i);
    //let className = "day " + this.checkWeekend(i);
    days.push(
      <CalendarDay date={MomentHelper.getDate(year, month, i)} differentMonth={false}
      //month={MomentHelper.getMonth(currentMoment)} year={MomentHelper.getYear(currentMoment)} day={i}
      />
    );
  }
  console.log(days);
  return days;
}
function getDaysAfterMonth(currentMoment) {
  let days = [];
  const nextMonth = MomentHelper.getNextMonth(currentMoment);
  const lastWeekdayMonth = MomentHelper.getLastWeekdayMonth(currentMoment)
  const month = MomentHelper.getMonth(nextMonth);
  const year = MomentHelper.getYear(nextMonth);
  for (let i = 0; i < 6 - lastWeekdayMonth; i++) {
    days.push(
      <CalendarDay date={MomentHelper.getDate(year, month, i + 1)} differentMonth={true}
      //month={MomentHelper.getMonth(afterMonth)} year={MomentHelper.getYear(afterMonth)} day={(i + 1)}
      />
    );
  }
  console.log(days)
  return days;
}




CalendarBody.propTypes = {
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
};

export default CalendarBody;
