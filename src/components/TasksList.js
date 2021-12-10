import React from "react";
import "./TasksList.css";

function TasksList(props) {
  console.log(props);

  const tasksToDo = props.tasks.map((task, index) => {
    return (
      <li key={index} className="list-item">
        {task}
      </li>
    );
  });

  return (
    <div className="task-board-container">
      <ul className="tasks-list">
        {tasksToDo}
      </ul>
    </div>
  );
}

export default TasksList;