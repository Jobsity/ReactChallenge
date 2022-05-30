
import moment from "moment";
import MomentHelper from "../Util/momentHelper";
const year = MomentHelper.getYear(moment())
const month = MomentHelper.getMonth(moment())
const day = MomentHelper.getDay(moment())

const initialState = {year:year,month:month,day:day}

export const dateReducer = (state =initialState,action: any) => {
  switch (action.type) {
    case "SETDATE": 
    return state = {year:action.year,month:action.month,day:action.day}
  }
return state
};
