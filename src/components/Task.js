import React, { useEffect, useRef, useState } from "react";
import "./Task.css";

function Task(props) {
  const [fakeState, setFakeState] = useState(0);
  const [isToggleable, setIsToggleable] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const elementRef = useRef();

  const onDeleteClickEvent = () => {
    props.onDelete(props.task.text);
  };

  const lineThroughCheckedText = () => {
    return props.task.isDone ? "line-through" : "";
  };

  const onCheckboxChange = (event) => {
    const { checked } = event.target;
    props.task.isDone = checked;
    setFakeState(fakeState + 1);
  };

  useEffect(() => {
    const divElement = elementRef.current;
    setIsToggleable(divElement.offsetWidth < divElement.scrollWidth || divElement.clientHeight > 46);
  }, []);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
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
      <span className={`task-text ${isCollapsed ? 'collapsed' : ''} ${lineThroughCheckedText()}`} ref={elementRef} >{props.task.text}</span>
      {isToggleable ? <button className="toggle-button" onClick={toggleCollapsed}>{isCollapsed ? '⌄' : '⌃'}</button> : ''}
    </li>
  );
}

export default Task;