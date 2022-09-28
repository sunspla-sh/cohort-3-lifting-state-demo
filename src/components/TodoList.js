import Task from './Task';
import Summary from './Summary';

import { useState } from 'react';

const initialTaskArray = [
  { 
    _id: 1,
    name: 'laundry',
    description: 'put clothes in dryer',
    taskStatus: false
  },{ 
    _id: 2,
    name: 'learn react',
    description: 'lifting state demo and form demo',
    taskStatus: false
  },{ 
    _id: 3,
    name: 'labs',
    description: 'finish old labs and today\'s labs',
    taskStatus: false
  }
];

function TodoList(){

  const [myTaskArray, setMyTaskArray] = useState(initialTaskArray)

  const toggleTask = (taskId) => {

    const copyMyTaskArray = [...myTaskArray];

    const foundTaskIndex = copyMyTaskArray.findIndex(element => {
      return element._id === taskId
    });

    copyMyTaskArray[foundTaskIndex].taskStatus = !copyMyTaskArray[foundTaskIndex].taskStatus

    setMyTaskArray(copyMyTaskArray);

  };

  return (
    <div>
      <Summary myTaskArray={myTaskArray} />
      {
        myTaskArray.map(singleTask => {
          return <Task key={singleTask._id} taskObject={singleTask} toggleTask={toggleTask}/>
        })
      }
    </div>
  );
}

export default TodoList;