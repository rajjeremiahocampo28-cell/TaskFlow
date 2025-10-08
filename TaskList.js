import React from 'react';

function TaskList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map(({ id, name }) => (
        <li key={id}>
          {name} 
          <button onClick={() => deleteTask(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
