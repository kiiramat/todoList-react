import React from "react";

import Checkbox from "./components/Checkbox"

class TodoContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      isVegetarian: true
    }
    this.onChangedCheckbox = this.onChangedCheckbox.bind(this)
  }

  onChangedCheckbox(name, checked) {
    this.setState({
      [name] : checked
    })
  }

  render() {
    return (
      <div>
        <Checkbox 
          text = "Vegetarian"
          name = "isVegetarian"
          value = {this.state.isVegetarian}
          ckecked = {this.state.isVegetarian}
          handleChange = {this.onChangedCheckbox}
        />
      </div>        
    )
  }
}

export default TodoContainer;