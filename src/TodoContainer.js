import React from "react";
import "./TodoContainer.css";

import TodoTitle from "./components/TodoTitle";
import InputBoxWithAddButton from "./components/InputBoxWithAddButton";
import TasksList from "./components/TasksList";
import Task from "./domain/Task";

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  onNewTask = (newTask) => {
    this.setState({ tasks: [...this.state.tasks, new Task(newTask)] });
  };

  onDelete = (taskText) => {
    this.setState(prevState => {
      const arrWithTaskDeleted = prevState.tasks.filter(task => task.text !== taskText)
      return ({
        tasks: arrWithTaskDeleted
      })
    });
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
        <TasksList
          tasks={this.state.tasks}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default TodoContainer;