import React from "react";

import PropTypes from "prop-types";


import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import MomentHelper from "../Util/momentHelper";
import { setDate } from "../actions";

function YearNav({date, changeYear}) {
  
  //const currentDate = useSelector((state) => state.dateReducer);
  const currentYear = MomentHelper.getYear(date)
  //const date = MomentHelper.getDate(currentDate.year,currentDate.month,currentDate.day)
  //const currentYear = MomentHelper.getYear(date)
  const [showEditYear, SetShowEditYear] = React.useState(false);
  //const dispatch = useDispatch();
  //const 
  const checkYear = (e) => {
    const newYear = e.target.value.replace(/\D/g, "")
    if(newYear == "") {
      e.target.value = currentYear;
      return;
    } 
    changeYear(parseInt(newYear))
    //dispatch(setDate(parseInt(newYear),currentDate.month, currentDate.day))
    //updateYear(parseInt(newYear))
  }

  const finishUpdateYear = (e) => {
    checkYear(e);
    SetShowEditYear(false)
  }

  return (
    <div>
    {showEditYear && <input
      defaultValue={currentYear}
      className="editorYear"
      //ref={(yearInput) => {
      //  this.yearInput = yearInput;
      //}}
      onKeyUp={(e) => checkYear(e)}
      onChange={(e) => checkYear(e)}
      onBlur={(e) => finishUpdateYear(e)}
      //onChange={(e) => this.onYearChange(e)}
      //onBlur={(e) => this.onBlur(e)}
      type="number"
      placeholder="year"
      autoFocus
    ></input>}

    {!showEditYear && <div
      className="labelYear"
      onClick={(e) => {
        SetShowEditYear(true)
      }}
    >
      {currentYear}
    </div>}
    
    </div>
  );
}
//{this.state.showMonthPopup && <this.SelectList data={this.months} />}
YearNav.propTypes = {
};
export default YearNav;