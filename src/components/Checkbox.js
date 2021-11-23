import React from "react";

class Checkbox extends React.Component {
  constructor() {
    super()
    this.onCheckboxChange = this.onCheckboxChange.bind(this)
  }

  onCheckboxChange(event) {
    const { name, checked } = event.target
    this.props.handleChange(name, checked)
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            name={this.props.name}
            checked={this.props.checked}
            onChange={this.onCheckboxChange}
          />
          {this.props.text}
        </label>
      </div>
    )
  }
}

export default Checkbox