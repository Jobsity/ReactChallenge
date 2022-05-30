import React from "react";
import PropTypes from "prop-types";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import MomentHelper from "../Util/momentHelper";
import ReminderList from "./ReminderList";

function CalendarComponent() {
  const [currentDate, SetCurrentDate] = React.useState(MomentHelper.getDate(2022, 3, 2))

  const currentDay = MomentHelper.getDay(currentDate);
  const currentMonth = MomentHelper.getMonth(currentDate);
  const currentYear = MomentHelper.getYear(currentDate);

  const updateYear = year => {
    SetCurrentDate(MomentHelper.getDate(year, currentMonth, currentDay));
  }
  const updateMonth = month => {
    //console.log("updatemonth")
    const newdate = MomentHelper.getDate(currentYear, month, currentDay)
    SetCurrentDate(newdate);
  }
  const updateDay = day => {
    SetCurrentDate(MomentHelper.getDate(currentYear, currentMonth, day));
  }
  return (
    <div className="calendar">
      <table className="calendarTable">
        <CalendarHeader />
        <CalendarBody />
      </table>
      <ReminderList />
    </div>
  );
}

CalendarComponent.propTypes = {
  limit: PropTypes.number,
};

export default CalendarComponent;
