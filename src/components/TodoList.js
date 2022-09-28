import Task from './Task';
import Summary from './Summary';
import AddTask from './AddTask';

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

  const [myTaskArray, setMyTaskArray] = useState(initialTaskArray);

  const [myFilteredArray, setMyFilteredArray] = useState(initialTaskArray);

  const toggleTask = (taskId) => {

    const copyMyTaskArray = [...myTaskArray];

    const foundTaskIndex = copyMyTaskArray.findIndex(element => {
      return element._id === taskId
    });

    copyMyTaskArray[foundTaskIndex].taskStatus = !copyMyTaskArray[foundTaskIndex].taskStatus

    setMyTaskArray(copyMyTaskArray);

  };

  const addNewTask = (newTaskObject) => {

    const copyArray = [...myTaskArray];

    copyArray.push(newTaskObject);

    setMyTaskArray(copyArray);
    setMyFilteredArray(copyArray);

  }

  const handleSearch = (event) => {
    console.log(event.target.value)
    const matchArray = myTaskArray.filter(element => {
      return element.name.includes(event.target.value);
    })
    setMyFilteredArray(matchArray);
  }

  return (
    <div>
      <div>
        <h2>Search Tasks</h2>
        <input type="text" onChange={handleSearch}/>
      </div>
      
      <AddTask addNewTask={addNewTask} />
      <Summary myTaskArray={myTaskArray} />
      {
        myFilteredArray.map(singleTask => {
          return <Task key={singleTask._id} taskObject={singleTask} toggleTask={toggleTask}/>
        })
      }
    </div>
  );
}

export default TodoList;