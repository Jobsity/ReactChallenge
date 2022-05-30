import { combineReducers } from "redux";
import {dateReducer} from "../store/dateReducer";
import {reminderReducer} from "../store/reminderReducer";

const reducers = {
    dateReducer,
    reminderReducer
};

export default combineReducers(reducers);
