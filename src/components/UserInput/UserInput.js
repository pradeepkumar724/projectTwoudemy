import React, { useState } from "react";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

function UserInput(props) {
  const [userInput, setUserInput] = useState(initialUserInput);
  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };
  const resetHandler = () => {
    console.log("RESET");
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    console.log(input, value);
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(event) =>
                inputChangeHandler("current-savings", event.target.value)
              }
              value={userInput["current-savings"]}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              }
              value={userInput["yearly-contribution"]}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(event) =>
                inputChangeHandler("expected-return", event.target.value)
              }
              value={userInput["expected-return"]}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
              value={userInput["duration"]}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={resetHandler} className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default UserInput;
