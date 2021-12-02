import React from "react";

class InputBox extends React.Component {
    constructor() {
      super();
    }
  
    onInputChange = (event) => {
      const { name, value } = event.target;
      this.props.handleChange(name, value);
    }
  
    render() {
      return (
        <div>
          <input
            type="text"
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.onInputChange}
            autoComplete="off"
          />
        </div>
      );
    }
  }

export default InputBox