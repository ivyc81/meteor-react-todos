import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Task from './Task';

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

export default withTracker(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
})(App);
