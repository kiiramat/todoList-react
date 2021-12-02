import React from "react";

import TodoTitle from "./components/TodoTitle";
import Checkbox from "./components/Checkbox"

class TodoContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      isVegetarian: true
    }
  }

  onChangedCheckbox = (name, checked) => {
    this.setState({
      [name] : checked
    })
  }

  render() {
    return (
      <div>
        <TodoTitle />
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