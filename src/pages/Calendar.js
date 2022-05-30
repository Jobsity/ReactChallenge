import React from "react";

import CalendarComponent from "../components/Calendar";

export default class Calendar extends React.Component {

  render() {
    return (
      <div>
        <h2>Calendar</h2>
        <CalendarComponent/>
      </div>
      
    );
  }
}
