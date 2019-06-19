import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Task from './Task';
import AddTodoForm from './AddTodoForm';

import {Tasks} from '../api/tasks';

function App(props) {
  function getTasks() {
    return props.tasks;
  }

  function renderTasks() {
    return getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  function handleSubmit(val) {
    const {todo} = val;
    Tasks.insert({
      text: todo,
      createdAt: new Date(), // current time
    });
  }

  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm triggerSubmit={handleSubmit}/>
      <ul>
        {renderTasks()}
      </ul>
    </div>
  );
}

export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(App);
