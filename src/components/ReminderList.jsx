import React from "react";

import PropTypes from "prop-types";
import Reminder from "./Reminder";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import MomentHelper from "../Util/momentHelper";

function ReminderList() {

  const currentReminderList = useSelector((state) => state.reminderReducer);
  const currentDate = useSelector((state) => state.dateReducer);
  const dispatch = useDispatch();

  
  const [addingNewReminder,SetAddingNewReminder] = React.useState(false)


const finishAddingReminder = () => {
  SetAddingNewReminder(false)
}

  return <div>
  {checkNewReminders(addingNewReminder,SetAddingNewReminder,MomentHelper.getDateFromObject(currentDate),finishAddingReminder)}
  {getReminders(currentReminderList, currentDate)}
  
  </div>
}

function checkNewReminders(addingNewReminder,SetAddingNewReminder,selectedDate,finishAddingReminder) {
  if(!addingNewReminder) {
    return <div className="newReminder button"> <Button 
    onClick={() => {
      SetAddingNewReminder(true)
    }}
    >New Reminder</Button>
    </div>
  }
  return <Reminder selectedDate={selectedDate} addingNewReminder={true} finishAddingReminder={finishAddingReminder} time={"12:00"} city={349727} text={""} />
}

function getReminders(currentReminderList, currentDate) {
  const date = MomentHelper.getDateFromObject(currentDate)
  const todayList = currentReminderList.filter(i => MomentHelper.compareDates(i.date,date))
  let reminders = [];
  for(let i = 0; i < todayList.length; i++) {
    reminders.push(<Reminder selectedDate={date} id={todayList[i].id} text={todayList[i].reminder} city={todayList[i].city} time={todayList[i].time} />)
  }
  return reminders
}

ReminderList.propTypes = {
};

export default ReminderList;
