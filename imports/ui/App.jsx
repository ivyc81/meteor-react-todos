import React from 'react';
import Task from './Task';

function App() {
  function getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  function renderTasks() {
    return getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
      </header>

      <ul>
        {renderTasks()}
      </ul>
    </div>
  );
}

export default App;
