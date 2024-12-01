import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', due_date: '' });
  const [editTask, setEditTask] = useState(null); 

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/tasks');
    setTasks(response.data);
  };

  const handleCreateTask = async () => {
    if (!newTask.title) return alert("Title is required!");
    await axios.post('http://localhost:5000/tasks', newTask);
    setNewTask({ title: '', description: '', due_date: '' });
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      fetchTasks();
    }
  };

  const handleEditTask = async (task) => {
    setEditTask(task); 
    setNewTask({ title: task.title, description: task.description, due_date: task.due_date });
  };

  const handleUpdateTask = async () => {
    if (!newTask.title) return alert("Title is required!");
    await axios.put(`http://localhost:5000/tasks/${editTask.id}`, newTask);
    setEditTask(null); 
    setNewTask({ title: '', description: '', due_date: '' });
    fetchTasks();
  };

  return (
    <div>
      <h1>Task Manager</h1>

      <div>
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <input
          type="date"
          value={newTask.due_date}
          onChange={(e) => setNewTask({ ...newTask, due_date: e.target.value })}
        />
        {editTask ? (
          <button onClick={handleUpdateTask}>Update Task</button>
        ) : (
          <button onClick={handleCreateTask}>Add Task</button>
        )}
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Due: {task.due_date}</p>
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
