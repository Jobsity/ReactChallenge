import React from "react";

import PropTypes from "prop-types";


import moment from "moment";
import MomentHelper from "../Util/momentHelper";
import MonthList from "./MonthList";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../actions";

function MonthNav() {
  const currentDate = useSelector((state) => state.dateReducer);
  //let date = MomentHelper.getDate(currentDate.year,currentDate.month,currentDate.day)
  //useSelector( (state: RootState) => state.tsReducer.isDialogOpen)
  const dispatch = useDispatch();

  const date = MomentHelper.getDateFromObject(currentDate)
  const changeMonth = month => {

    const date = MomentHelper.getDateFromObject(currentDate)
    const newMonth = MomentHelper.addMonths(date, month - currentDate.month)

    const day = MomentHelper.getDay(newMonth);
    //SetCurrentDate(MomentHelper.getDate(year,MomentHelper.getMonth(newMonth),day))
    const newdate = dispatch(setDate(currentDate.year, MomentHelper.getMonth(newMonth), day))

  }
  
  return (
    <React.Fragment>
      <MonthList date={date} changeMonth={changeMonth}/>
    </React.Fragment>
  );
}


//{this.state.showMonthPopup && <this.SelectList data={this.months} />}
MonthNav.propTypes = {
    currentMonth: PropTypes.number,
};
export default MonthNav;