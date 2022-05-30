import React from "react";

import PropTypes from "prop-types";


import moment from "moment";
import MomentHelper from "../Util/momentHelper";
import { useSelector } from "react-redux";

function ReminderText({startingText, changeText}) {
    //const startingText = "a"
    const [currentText,SetCurrentText] = React.useState(startingText)

    const validateText = (newText) => {
        if(newText.length < 30) {
            SetCurrentText(newText)
            return;
        }

    }
    const finishTexting = () => {
        changeText(currentText)
    }
  
  return  (<input value={currentText} //value={currentText} 
        onChange={(e) => validateText(e.target.value)}
        onBlur={() => finishTexting()}
        ></input>)
  
}

ReminderText.propTypes = {
};
export default ReminderText;