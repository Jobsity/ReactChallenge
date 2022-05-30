export const setDate = (year,month,day) => {
  return {
    type:"SETDATE",
    year:year,
    month:month,
    day:day
  }
}
export const newReminder = (date,time,reminder,city) => {
  return {
    type:"NEWREMINDER",
    date:date,
    time:time,
    reminder:reminder,
    city:city,
    id:Math.floor(Math.random()*1000000000)
  }
}
export const editReminder = (date,time,reminder,city,id) => {
  return {
    type:"EDITREMINDER",
    date:date,
    time:time,
    reminder:reminder,
    city:city,
    id:id
  }
}
export const deleteReminder = (id) => {
  return {
    type:"DELETEREMINDER",
    id:id
  }
}