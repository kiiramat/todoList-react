import React from "react";
import "./TodoContainer.css";

import TodoTitle from "./components/TodoTitle";
import InputBoxWithAddButton from "./components/InputBoxWithAddButton";
import TasksList from "./components/TasksList";
import Task from "./domain/Task";

class TodoContainer extends React.Component {
  constructor() {
    super();
    let tasks;
    try {
      tasks = JSON.parse(localStorage.tasks).map(obj => Task.fromJson(obj));
    } catch (e) {
      console.warn(e);
      tasks = [];
    }
    this.state = {
      tasks: tasks,
      isNewTaskInputInvisible: false
    };
  }

  updateLocalStorageTasks = () => {
    localStorage.tasks = JSON.stringify(this.state.tasks);
  }

  onNewTask = (newTask) => {
    this.setState({ tasks: [...this.state.tasks, new Task(newTask)] }, this.updateLocalStorageTasks);
  };

  onDelete = (taskText) => {
    this.setState(prevState => {
      const arrWithTaskDeleted = prevState.tasks.filter(task => task.text !== taskText);
      return ({
        tasks: arrWithTaskDeleted
      });
    }, this.updateLocalStorageTasks);
  };

  clearCompletedTasks = () => {
    this.setState(prevState => {
      const arrWithoutCompletedTasks = prevState.tasks.filter(task => !task.isDone);
      return ({
        tasks: arrWithoutCompletedTasks
      });
    }, this.updateLocalStorageTasks);
  };

  clearAllTasks = () => {
    this.setState({ tasks: [] }, this.updateLocalStorageTasks);
  };

  shouldHideButtons = () => {
    return this.state.tasks.length === 0;
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    let windowHeight = window.scrollY;
    if (windowHeight > 200) {
      this.setState({ isNewTaskInputInvisible: true });
    } else {
      this.setState({ isNewTaskInputInvisible: false });
    }
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
          updateLocalStorageTasks={this.updateLocalStorageTasks}
        />
        <div className={`clear-buttons-container ${this.shouldHideButtons() ? 'hidden' : ''}`}>
          <button className="clear-completed-tasks" onClick={this.clearCompletedTasks}> CLEAR DONE </button>
          <button className="clear-all-tasks" onClick={this.clearAllTasks}> CLEAR ALL </button>
        </div>
        <button className={`scroll-to-top-button ${this.state.isNewTaskInputInvisible ? "" : "hidden"}`} onClick={this.scrollToTop}>BACK TO TOP</button>
      </div>
    );
  }
}

export default TodoContainer;