import React from "react"; 
import "./TodoContainer.css"

import TodoTitle from "./components/TodoTitle";
import InputBox from "./components/InputBox";
import AddButton from "./components/AddButton";
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
        <div className="input-add_button-container">
          <InputBox 
            name="newTask"
            placeholder="New Task"
            onNewTask={this.onNewTask}
          />
          <AddButton/>
        </div>
        <div className="task_board-container">
          <TasksList />
        </div>
      </div>
    );
  }
}

export default TodoContainer;