
import moment from "moment";

const MomentHelper = {};

MomentHelper.getDate = (year,month,day) => {

    return moment(`${year}/${month}/${day}`,"YYYY/M/D")
}
MomentHelper.getDateFromObject = (object) => {
    return moment(`${object.year}/${object.month}/${object.day}`,"YYYY/M/D")
}
MomentHelper.formatDate = (date) => {
    return date.format("YYYY/M/D");
}

MomentHelper.getPrevMonth = (date) => {
    return date.clone().add(-1,"M")
}
MomentHelper.getNextMonth = (date) => {
    return date.clone().add(1,"M")
}
MomentHelper.addMonths = (date, months) => {
    return date.clone().add(months,"M")
}
MomentHelper.getPrevDay = (date) => {
    return date.clone().add(-1,"D")
}
MomentHelper.getYear = (date) => {
    return parseInt(date.format("YYYY"))
}
MomentHelper.getMonth = (date) => {
    return parseInt(date.format("M"));
}
MomentHelper.getDay = (date) => {
    return parseInt(date.format("D"));
}
MomentHelper.getFirstDayMonth = (date) => {
    return date.clone().startOf("month").format("d")
}
MomentHelper.getLastWeekdayMonth = (date) => {
    return date.clone().endOf("month").weekday();
}
MomentHelper.getDaysInMonth = (date) => {
    return date.daysInMonth();
}
MomentHelper.getWeekday = (date) => {
    return date.format("d");
}
MomentHelper.getMonthName = (date) => {
    return date.format("MMMM")
}
MomentHelper.compareDates = (date1, date2) => {
    return moment(date1).isSame(date2,'day')
}
MomentHelper.fiveDays = (date) => {
    return date.isBetween(moment(),moment().add(4,"D"))
}

export default MomentHelper;
