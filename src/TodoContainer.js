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
      const arrWithTaskDeleted = prevState.tasks.filter(task => task.text !== taskText);
      return ({
        tasks: arrWithTaskDeleted
      });
    });
  };

  clearCompletedTasks = () => {
    this.setState(prevState => {
      const arrWithoutCompletedTasks = prevState.tasks.filter(task => !task.isDone);
      return ({
        tasks: arrWithoutCompletedTasks
      });
    });
  };

  clearAllTasks = () => {
    this.setState({ tasks: [] });
  };

  shouldHideButtons = () => {
    return this.state.tasks.length === 0;
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
          onDelete={this.onDelete}
        />
        <div className={`clear-buttons-container ${this.shouldHideButtons() ? 'hidden' : ''}`}>
          <button className="clear-completed-tasks" onClick={this.clearCompletedTasks}> CLEAR DONE </button>
          <button className="clear-all-tasks" onClick={this.clearAllTasks}> CLEAR ALL </button>
        </div>
        <button className="scroll-to-top-button" onClick={this.scrollToTop}>BACK TO TOP</button>
      </div>
    );
  }
}

export default TodoContainer;