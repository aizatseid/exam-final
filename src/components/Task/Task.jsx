

export const Task = ({ user, setEditUser, deleteUser }) => {
  return (
    <li>
      {user.task} 
      <button onClick={() => setEditTask(user)}>Редактировать</button>
      <button onClick={() => deleteTask(user.id)}>Удалить</button>
    </li>
  );
};

