import React from "react";
import "./TodoContainer.css";

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
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  handleClick = (task) => {
    this.setState(prevState => {
      const arrWithTaskDeleted = prevState.tasks.filter(item => item !== task)
      return ({
        tasks: arrWithTaskDeleted
      })
    })
  }

  render() {
    return (
      <div>
        <TodoTitle />
        <InputBoxWithAddButton
          name="newTask"
          placeholder="New Task"
          onNewTask={this.onNewTask}
        />
        <TasksList
          tasks={this.state.tasks}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default TodoContainer;