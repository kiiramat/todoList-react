import React from "react";

function TasksList(props) {
  console.log(props);

  const tasksToDo = props.tasks.map((task, index) => {
    return (
      <div>
        <li key={index} >
          {task}
        </li>
      </div>

    );
  });
  return (
    <div>
      {tasksToDo}
    </div>
  );
}

export default TasksList;