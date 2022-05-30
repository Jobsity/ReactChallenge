import React from "react";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import MomentHelper from "../Util/momentHelper";
import MonthList from "./MonthList";
import Button from "./Button";
import YearNav from "./YearNav";
import DayList from "./DayList";
import TimePicker from "./TimeList";
import TimeList from "./TimeList";
import ReminderText from "./ReminderText";
import CityList from "./CityList";
import { deleteReminder, editReminder, newReminder } from "../actions";
import citiesList from "../mocks/cities";

function Reminder({id, selectedDate, text, time, city, addingNewReminder,finishAddingReminder}) {
  const [edit,SetEdit] = React.useState(false)
  const [currentDate,SetCurrentDate] = React.useState(selectedDate)
  const [currentTime,SetCurrentTime] = React.useState(time)
  const [currentText,SetCurrentText] = React.useState(text)
  const [currentCity, SetCity] = React.useState(city);
  
  //const date = MomentHelper.getDateFromObject(currentDate)
  const dispatch = useDispatch();

  const changeMonth = (month) => {
    const currentMonth = MomentHelper.getMonth(currentDate);
    const newMonth = MomentHelper.addMonths(currentDate, month - currentMonth)

    const year = MomentHelper.getYear(currentDate);

    const day = MomentHelper.getDay(newMonth);
    SetCurrentDate(MomentHelper.getDate(year,MomentHelper.getMonth(newMonth),day))
  }
  const changeYear = (year) => {
    const month = MomentHelper.getMonth(currentDate);
    const day = MomentHelper.getDay(currentDate)
    SetCurrentDate(MomentHelper.getDate(parseInt(year),month,day))
  }
  const changeDay = (day) => {
    const year = MomentHelper.getYear(currentDate);
    const month = MomentHelper.getMonth(currentDate);
    SetCurrentDate(MomentHelper.getDate(year,month,parseInt(day)))
  }

  const timeChanged = (hour,minute) => {
    SetCurrentTime(`${hour}:${minute}`)
  }

  const changeText = (newText) => {
    SetCurrentText(newText)
    //console.log("textChanging",newText)
    //SetText(newText)
  }
  const changeCity = (city) => {
    SetCity(city)
    //SetText(newText)
  }
  return (
    <div className="baseModal">
    <div className="modal">
    {checkYear(addingNewReminder,edit,currentDate,changeYear)}
    {checkMonth(addingNewReminder,edit,currentDate,changeMonth)}
    {checkDay(addingNewReminder,edit,currentDate,changeDay)}
    {checkTime(addingNewReminder,edit,currentTime,timeChanged)}
    {checkText(addingNewReminder,edit,currentText,changeText)}
    {checkCity(addingNewReminder,edit,currentCity,changeCity)}
    {checkWheather(currentCity,currentDate)}
    {checkButtons(addingNewReminder,edit,currentDate,currentTime, currentText,currentCity,dispatch,SetEdit,id,finishAddingReminder)}
    </div>
    </div>
  )
}

function checkYear(addingNewReminder,edit,currentDate,changeYear) {
  if(addingNewReminder || edit) return (
    <div className="modalColumn">
    <div className="label">year</div>
  <YearNav date={currentDate} changeYear={changeYear}/>
</div>
  )
return <div className="modalColumn">
<div className="label">year</div>
<div>{MomentHelper.getYear(currentDate)}</div>
</div>
}

function checkMonth(addingNewReminder,edit,currentDate,changeMonth) {
  if(addingNewReminder || edit) return (
    <div className="modalColumn">
    <div className="label">month</div>
  <MonthList changeMonth={changeMonth} date={currentDate}/>
</div>
  )
  return <div className="modalColumn">
  <div className="label">month</div>
  <div>{MomentHelper.getMonthName(currentDate)}</div>
</div>
}

function checkDay(addingNewReminder,edit,currentDate,changeDay) {
  if(addingNewReminder || edit) return (<div className="modalColumn">
  <div className="label">day</div>
  <DayList date={currentDate} changeDay={changeDay}/>
</div>
  )
  return <div className="modalColumn">
  <div className="label">day</div>
      <div>{MomentHelper.getDay(currentDate)}</div>
  </div>
}

function checkTime(addingNewReminder,edit,currentTime,timeChanged) {
  if(addingNewReminder || edit) return (
    <div className="modalColumn">
    <div className="label">time</div>
    <TimeList currentTime={currentTime} timeChanged={timeChanged} />
</div>
  )
  return <div className="modalColumn">
  <div className="label">time</div>
  <div>{currentTime.split(":")[0].padStart(2,"0")}:{currentTime.split(":")[1].padStart(2,"0")}</div>
</div>
}
function checkText(addingNewReminder,edit,text,changeText) {
  if(addingNewReminder || edit) return (
    <div className="modalColumn">
    <div className="label">reminder</div>
<ReminderText startingText={text} changeText={changeText} />
</div>
  )
  return <div className="modalColumn">
  <div className="label">reminder</div>
  <div>{text}</div>
  </div>
}


function checkCity(addingNewReminder,edit,currentCity,changeCity) {
  if(addingNewReminder || edit) return (
    <div className="modalColumn">
    <div className="label">city</div>
        <CityList city={currentCity} changeCity={changeCity} />
    </div>
  )
  return <div className="modalColumn">
  <div className="label">city</div>
  <div>{citiesList.find(i => i.code == currentCity).name}</div>
</div>
}

function checkWheather(currentCity,currentDate) {
  let wheather = "unknown";

  if(MomentHelper.fiveDays(currentDate)) {
    //sorry, time was up and it was not possible to complete this task

  }
  return (
  <div className="modalColumn">
  <div className="label">Wheather</div>
  <div>{wheather}</div>
  </div>
  )
}

function checkButtons(addingNewReminder,edit,currentDate,currentTime, currentText,currentCity,dispatch, SetEdit,id,finishAddingReminder) {
  if(addingNewReminder || edit) {
    return (<div className="modalColumn">
    <div className="button">
    <Button
    onClick={() => {
      saveItem(currentDate,currentTime,currentText,currentCity,id,dispatch,addingNewReminder,finishAddingReminder,SetEdit)
      //const aux = dispatch(editReminder(MomentHelper.formatDate(currentDate),currentTime,currentText,currentCity,1));
    }}
    >Save</Button>
    </div>
    <div className="button">
    <Button onClick={() => {
      deleteItem(id,dispatch,addingNewReminder,finishAddingReminder,SetEdit)
    }}
    >{addingNewReminder ? "Discard" : "Delete"}</Button>
    </div>
    </div>)
  } 
  return <div className="button">
  <Button onClick={() => {
    editItem(SetEdit)
  }}
  >Edit</Button>
  </div>
}

function saveItem(currentDate,currentTime,currentText,currentCity,id,dispatch,addingNewReminder,finishAddingReminder,SetEdit) {
  if(addingNewReminder) {
    console.log(dispatch)
    dispatch(newReminder(currentDate,currentTime,currentText,currentCity))
    finishAddingReminder()
  }
  
  dispatch(editReminder(currentDate,currentTime,currentText,currentCity,id))
  SetEdit(false)
}

function deleteItem(id,dispatch,addingNewReminder,finishAddingReminder,SetEdit) {
  console.log(id,dispatch,addingNewReminder)
  console.log(finishAddingReminder)
  if(addingNewReminder)
  finishAddingReminder()
  else {
  SetEdit(false)
  dispatch(deleteReminder(id));
  }
}

function editItem(SetEdit) {
  SetEdit(true)
}



export default Reminder;
