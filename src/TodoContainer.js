import React from "react"; 

import TodoTitle from "./components/TodoTitle";
import InputBox from "./components/InputBox";
import AddButton from "./components/AddButton";

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ""
    };
  }

  onChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <TodoTitle />
        <InputBox 
          name="newTask"
          value={this.state.newTask}
          placeholder="New Task"
          handleChange={this.onChange}
        />
        <AddButton />
      </div>
    );
  }
}

export default TodoContainer;