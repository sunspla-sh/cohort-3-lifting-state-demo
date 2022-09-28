import { useState } from 'react';

function AddTask(props){

  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const updateTaskName = (event) => setNewTaskName(event.target.value);
  const updateTaskDescription = (event) => setNewTaskDescription(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const myNewTaskObject = {
      name: newTaskName,
      description: newTaskDescription,
      taskStatus: false,
      _id: Math.floor(Math.random() * 100000)
    };

    props.addNewTask(myNewTaskObject);

  }

  return (
    <div>
      <h2>Add a task</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Task Name</label>
          <input
            type="text"
            value={newTaskName}
            onChange={updateTaskName}
          />
        </div>
        <div>
          <label>Task Description</label>
          <input
            type="text"
            value={newTaskDescription}
            onChange={updateTaskDescription}
          />
        </div>
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;