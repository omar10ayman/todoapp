import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Input from './component/Input/Input';
import {useState} from'react';
import List from './component/List/list';

function App() {
  const [taskObj,setValue]=useState({})
  const [taskArr,setArr]=useState([])
  function handleChange(e){
    taskObj.id=Math.floor(Math.random()*100)
    taskObj.task=e.target.value
    taskObj.isDone=false
  }
  function handleClick(){
    setValue({...taskObj})
    taskArr.push(taskObj)
    setArr([...taskArr])
    document.getElementById("add-task").value=''
  }
  
  function handleDelete(id){
    let arrDeleted=[]
    arrDeleted=taskArr.filter((e)=>e.id !==id)
    setArr(arrDeleted)
  }
  function handleUpdate(id){
    let updatesk=taskArr.find((e)=>e.id ==id)
    updatesk.isDone=!updatesk.isDone
    setArr([...taskArr])
  }
  return(
     <div>
       <Input type={"text"} id={"add-task"} handleClick={handleClick} handleChange={handleChange} value={taskObj.task}/>
       <List taskArr={taskArr} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
     </div>
  );
}

export default App;
