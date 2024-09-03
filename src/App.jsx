import React, { useState } from 'react';
import { Tasks } from './components/Tasks/Tasks';
import { TaskForm }from './components/TaskForm/TaskForm';
import { Task } from './components/Task/Task';
import { isPallindrom } from './task1';



export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(user => task.id === updatedTask.id ? updatedTask : task));
    setEditTask(null);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
      <div className="App">
        <h1>Управление задачами</h1>
        <Task addTask={addTask} updateTask={updateTask} editTask={editTask} />
        <Tasks tasks={tasks} setEditTask={setEditTask} deleteTask={deleteTask} />
      </div>
  );
}




