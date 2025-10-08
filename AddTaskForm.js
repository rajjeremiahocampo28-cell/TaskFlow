import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTask({ name: taskName });
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        placeholder="New task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
