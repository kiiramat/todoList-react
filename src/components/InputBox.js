import React, { useState } from "react";
import "./InputBox.css"

const InputBox = function(props) {
  const [task, setTask] = useState("");

  const onInputChange = (event) => {
    setTask(event.target.value);
  };

  const onKeyDownEvent = (event) => {
    if (event.key === "Enter" && task !== "") {
      props.onNewTask(task)
      setTask("")
    }
  }

  return (
    <div>
      <input
        className = "input-field"
        type="text"
        name={props.name}
        value={task}
        placeholder={props.placeholder}
        onKeyDown={onKeyDownEvent}
        onChange={onInputChange}
        autoComplete="off"
      />
    </div>
  );
}


export default InputBox;