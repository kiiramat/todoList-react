import React from "react";

const InputBox = function(props) {
  const onInputChange = (event) => {
    const { name, value } = event.target;
    props.handleChange(name, value);
  };

  return (
    <div>
      <input
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