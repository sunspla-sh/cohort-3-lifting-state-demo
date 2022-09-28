function Summary(props){

  let myCompletedTasks = 0;

  props.myTaskArray.forEach(element => {
    if(element.taskStatus){
      myCompletedTasks++
    }
  })

  return (
    <div>
      <h2>Summary</h2>
      <h3>Tasks Complete: {myCompletedTasks}</h3>
    </div>
  );
}

export default Summary