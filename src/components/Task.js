//import { useState } from 'react';

function Task(props){

  //const [taskStatus, setTaskStatus] = useState(false);
  
  return (
    <div className="task">
      {props.taskObject.taskStatus ? <span>DONE</span> : <span>IN-PROGRESS</span>}
      <h3>{props.taskObject.name}</h3>
      <p>{props.taskObject.description}</p>
      <button onClick={() => props.toggleTask(props.taskObject._id)}>
        {props.taskObject.taskStatus ? 'Undo' : 'Complete'}
      </button>
    </div>
  );

}

export default Task;