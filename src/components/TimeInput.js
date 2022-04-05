import React, { Fragment } from "react";
import "./TimeInput.css";

const TimeInput = () => {
  return (
    <Fragment>
      <div className="clock__edit">
        <input
          type="number"
          className="clock__input clock__input--minutes"
          id="minutes"
          defaultValue={"25"}
          min={"0"}
          max={"59"}
        />
        <span className="clock__colon">:</span>
        <input
          type="number"
          className="clock__input clock__input--seconds"
          id="seconds"
          defaultValue={"0"}
          min={"0"}
          max={"59"}
        />
      </div>
      <button></button>
    </Fragment>
  );
};

export default TimeInput;
