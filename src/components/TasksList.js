import "./TasksList.css";
import Task from "./Task";

function TasksList(props) {
  const tasksToDo = props.tasks.map((task, index) => {
      return (
        <Task key={index} task={task} onDelete={props.onDelete} updateLocalStorageTasks={props.updateLocalStorageTasks}/>
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