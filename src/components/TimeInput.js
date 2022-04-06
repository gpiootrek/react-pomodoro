import React, { useRef, useState, Fragment } from "react";
import "./TimeInput.css";

const TimeInput = ({ handleTimeChange }) => {
  const minutesInputRef = useRef();
  const secondsInputRef = useRef();
  const [isInputValid, setIsInputValid] = useState();

  const handleInvalidInput = () => {
    setIsInputValid(true);
    setTimeout(() => setIsInputValid(false), 5000);
  };

  const handleMinutesInput = () => {
    const input = minutesInputRef.current.value;
    if (input > 60) {
      minutesInputRef.current.value = 60;
      handleInvalidInput();
    }
    if (input < 0) {
      minutesInputRef.current.value = "00";
      handleInvalidInput();
    }
  };

  const handleSecondsInput = () => {
    const input = secondsInputRef.current.value;
    if (input > 59) {
      secondsInputRef.current.value = 59;
      handleInvalidInput();
    }
    if (input < 0) {
      secondsInputRef.current.value = "00";
      handleInvalidInput();
    }
  };

  const handleChange = () => {
    let minutes = minutesInputRef.current.value;
    let seconds = secondsInputRef.current.value;
    handleTimeChange(minutes * 60 * 1000 + seconds * 1000);
  };

  return (
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
  );
};

export default TimeInput;
