import React from "react"; 
import "./TodoContainer.css"

import TodoTitle from "./components/TodoTitle";
import InputBoxWithAddButton from "./components/InputBoxWithAddButton";
import TasksList from "./components/TasksList";

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  onNewTask = (newTask) => {
    this.setState({tasks: [...this.state.tasks, newTask]})
  }

  render() {
    console.log(this.state.tasks)
    return (
      <div>
        <TodoTitle />
        <InputBoxWithAddButton 
          name="newTask"
          placeholder="New Task"
          onNewTask={this.onNewTask}
        />
        <TasksList tasks = {this.state.tasks} />
      </div>
    );
  }
}

export default TodoContainer;