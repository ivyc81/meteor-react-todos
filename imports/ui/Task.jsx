import React from 'react';

// Task component - represents a single todo item

function Task(props) {
    return (
        <li>{props.task.text}</li>
    )
}

export default Task;