import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem'; // Make sure to import TaskItem
import Stats from './components/Stats'; // Make sure to import Stats
import { MdDeleteSweep } from 'react-icons/md';
function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  const deleteTask = (taskName) => {
    setToDoList(toDoList.filter((task) => task.taskName !== taskName));
  };

  const toggleCheck = (taskName) => {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  };

  console.log(toDoList);
  return (
    <>
      <div className="container">
        <h1>Task master</h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          <span>to do</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem
                task={task}
                key={key}
                deleteTask={deleteTask} // Corrected the prop name here
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>
          {toDoList.length === 0 ? (
            <p className="notify">You are done!</p>
          ) : null}
        </div>
      </div>
      <Stats toDoList={toDoList} />
    </>
  );
}

export default App;
