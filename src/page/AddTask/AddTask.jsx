import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../redux/reducer/authReducer';
import { useLocation } from 'react-router-dom';

const AddTask = () => {
    const {tasks} = useSelector(state => state.auth)
    console.log(tasks);
    const [task,setTask] = useState();
    const [permission,setPermission] = useState();
    const dispatch = useDispatch();
    const {state} = useLocation()
    const emp =state.empEmail;

    const handleSubmit =() =>{
        const data = {emp,task,permission}
        dispatch(addTask(data));
        setTask("")
        setPermission("")
    }
  return (
    <div>
        <h1>Add Task</h1>
    <div>
        <input type='text' value={task} placeholder='Task Name' onChange={(e)=>setTask(e.target.value)}/><br />
        <input type="text" value={permission} placeholder="Permission" onChange={(e)=>setPermission(e.target.value)} /><br />
        <button onClick={handleSubmit}>Add Task</button>
    </div>
    </div>
  )
}

export default AddTask