import React, { useState } from "react";
import "./Task.css";

function Task(props) {
  const [fakeState, setFakeState] = useState(0);
  
  const onDeleteClickEvent = () => {
    props.onDelete(props.task.text);
  };

  const lineThroughCheckedText = () => {
    return props.task.isDone ? "line-through" :  ""
  };

  const onCheckboxChange = (event) => {
    const { checked } = event.target;
    props.task.isDone = checked;
    setFakeState(fakeState+1);
  };

  return (
    <li className="list-item">
      <button className="delete-task-button" onClick={onDeleteClickEvent}> x </button>
      <input
        className="checkbox"
        type="checkbox"
        name={props.task.text}
        checked={props.task.isDone}
        onChange={onCheckboxChange}
      />
      <span className={`task-text ${lineThroughCheckedText()}`} >{props.task.text}</span>
    </li>
  );
}

export default Task;