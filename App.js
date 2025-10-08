import React from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

function App() {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (taskDetails) => {
    const newTask = {
      id: Date.now(),
      ...taskDetails,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
