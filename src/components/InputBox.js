import React from "react";
import "./InputBox.css"

const InputBox = function(props) {
  const onInputChange = (event) => {
    const { name, value } = event.target;
    props.handleChange(name, value);
  };

  return (
    <div>
      <input
        className = "input-field"
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        onChange={onInputChange}
        autoComplete="off"
      />
    </div>
  );
}


export default InputBox;