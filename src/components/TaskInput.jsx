import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  function handleInputValue(event) {
    setTask(event.target.value);
  }

  function handleAddTask(event) {
    event.preventDefault();
    if (task.trim() === '') return;
    addTask(task);
    setTask(''); // Corrected the typo here (setTas to setTask)
  }

  return (
    <form className="inputField" onSubmit={handleAddTask}>
      <input
        type="text"
        value={task}
        placeholder="ADD Item"
        onChange={handleInputValue}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default TaskInput;