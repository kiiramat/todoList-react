import React, { useState } from "react";
import "./Task.css";

function Task(props) {
  const [checkedState, setCheckedState] = useState(false);

  const onClickEvent = () => {
    props.handleClick(props.task);
  };

  const onCheckboxChange = (event) => {
    const { checked } = event.target;;
    setCheckedState(checked);
  };


  return (
    <li className="list-item">
      <button className="delete-task-button" onClick={onClickEvent}> x </button>
      <input
        className="checkbox"
        type="checkbox"
        name={props.task}
        checked={checkedState}
        onChange={onCheckboxChange}
      />
      <span className="task-text" >{props.task}</span>
    </li>
  );
}

export default Task;