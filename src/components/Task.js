import React from "react";
import "./Task.css"

function Task(props) {
  const onClickEvent = () => {
    props.handleClick(props.task);
  };

  return (
    <li className="list-item">
      <button className="delete-task-button" onClick={onClickEvent}> x </button>
      <span className="task-text" >{props.task}</span>
    </li>
  );
}

export default Task;