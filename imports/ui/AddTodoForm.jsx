import React, {useState} from 'react';

// Task component - represents a single todo item

function AddTodoForm(props) {
  const [value, setValue] = useState({todo: ''});

  function handleSubmit(evt){
    evt.preventDefault();

    props.triggerSubmit(value);

    setValue({todo: ''});
  }

  function handleChange(evt){
    const {name, value} = evt.target;

    setValue({...value, [name]: value});
  }

  return (
    <form className="new-task" onSubmit={handleSubmit} >
    <input
      name="todo"
      value={value.todo}
      onChange={handleChange}
      placeholder="Type to add new tasks"
    />
  </form>
  )
}

export default AddTodoForm;