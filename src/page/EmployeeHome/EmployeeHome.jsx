import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { removeTask } from '../../redux/reducer/authReducer';

const EmployeeHome = () => {
  const {tasks} = useSelector(state=>state.auth)
  const dispatch =useDispatch();
  console.log(tasks);
  const {state} = useLocation();
  const currentUser = state.empEmail;

  const filteredTasks = tasks.filter(item => item.emp === currentUser);
  const handleDelete =()=>{
    dispatch(removeTask())
  }
  return (
    <div>
      <h1>Employee Home</h1>
      <div>
        <h4>All Tasks Assign</h4>
        <ul>
          {filteredTasks.map((task,index,)=>(
            <li key={index}>{task.task}
            {task.permission === 'delete' && (
              <button onClick={() => handleDelete(task)}>Delete</button>
            )}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default EmployeeHome