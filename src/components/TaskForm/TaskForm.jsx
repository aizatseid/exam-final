import React, { useState, useEffect } from 'react';

export const TaskForm = ({ addTask, updateTask, editTask }) => {
  const [task, setTask] = useState("");


  useEffect(() => {
    if (editTask) {
      setTask(editTask.name);
    } else {
      setTask("");
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTask) {
      updateTask({ ...editTask, task });
    } else {
      addTask({ id: Date.now(), task});
    }
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Задание:</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </div>
      <div>
      </div>
      <button type="submit">{editTask ? "Сохранить" : "Добавить"}</button>
    </form>
  );
}

