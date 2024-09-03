import React from "react";
import { Task } from "../Task/Task";


export const Tasks = ({ tasks, setEditTask, deleteTask }) => {
  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            setEditUser={setEditTask}
            deleteUser={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}




