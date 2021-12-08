import React, { useState } from "react";
import "./InputBoxWithAddButton.css";

const InputBox = function (props) {
  const [task, setTask] = useState("");

  const onInputChange = (event) => {
    setTask(event.target.value);
  };

  const onKeyDownEvent = (event) => {
    if (event.key === "Enter" && task !== "") {
      props.onNewTask(task);
      setTask("");
    }
  };

  const onClickEvent = () => {
    if (task !== "") {
      props.onNewTask(task);
      setTask("");
    }
  };

  return (
    <div className="input-add_button-container">
      <input
        className="input-field"
        type="text"
        name={props.name}
        value={task}
        placeholder={props.placeholder}
        onKeyDown={onKeyDownEvent}
        onChange={onInputChange}
        autoComplete="off"
      />
      <button
        className="add-button"
        onClick={onClickEvent}
      >
      ADD
      </button>
    </div>
  );
};


export default InputBox;