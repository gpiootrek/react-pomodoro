import React, { useRef, useState, Fragment } from "react";
import Notification from "./Notification";
import "./TimeInput.css";

const TimeInput = ({ handleTimeChange }) => {
  const minutesInputRef = useRef();
  const secondsInputRef = useRef();
  const [isInputValid, setIsInputValid] = useState(true);
  const [errorContent, setErrorContent] = useState("");

  const handleInvalidInput = (lowHigh) => {
    setIsInputValid(false);
    lowHigh === "high" &&
      setErrorContent("Entered number was too high. Changed to max value.");
    lowHigh === "low" &&
      setErrorContent("Entered number was too low. Changed to min value.");
    setTimeout(() => setIsInputValid(true), 5000);
  };

  const handleMinutesInput = () => {
    const input = minutesInputRef.current.value;
    if (input > 60) {
      minutesInputRef.current.value = 60;
      handleInvalidInput("high");
    }
    if (input < 0) {
      minutesInputRef.current.value = "00";
      handleInvalidInput("low");
    }
  };

  const handleSecondsInput = () => {
    const input = secondsInputRef.current.value;
    if (input > 59) {
      secondsInputRef.current.value = 59;
      handleInvalidInput("high");
    }
    if ((input < 1 && minutesInputRef.current.value < 1) || input < 0) {
      secondsInputRef.current.value = "01";
      handleInvalidInput("low");
    }
  };

  const handleChange = () => {
    let minutes = minutesInputRef.current.value;
    let seconds = secondsInputRef.current.value;
    handleTimeChange(minutes * 60 * 1000 + seconds * 1000);
  };

  return (
    <Fragment>
      <div className="clock__edit">
        <form className="clock__edit__form">
          <input
            type="number"
            className="clock__input clock__input--minutes"
            id="minutes"
            defaultValue={"25"}
            min={"0"}
            max={"59"}
            ref={minutesInputRef}
            onKeyUp={handleMinutesInput}
          />
          <span className="clock__colon">:</span>
          <input
            type="number"
            className="clock__input clock__input--seconds"
            id="seconds"
            defaultValue={"00"}
            min={"0"}
            max={"59"}
            ref={secondsInputRef}
            onKeyUp={handleSecondsInput}
          />
        </form>
        <button onClick={handleChange} className="clock__accept">
          Accept
        </button>
      </div>
      <Notification
        isPushed={!isInputValid}
        title="Invalid input"
        content={errorContent}
      />
    </Fragment>
  );
};

export default TimeInput;
