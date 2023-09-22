import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../../redux/reducer/authReducer';
import { useNavigate } from 'react-router-dom';
import { ADDTASK } from '../../router/keys';

const ManagerHome = () => {

  const {employees} = useSelector(state => state.auth);
  console.log(employees)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddEmployee =()=>{
    const Data = { email, password};
    dispatch(addEmployee(Data));
    setEmail("");
    setPassword("");
  }

  const handleAssignTask =()=>{
    navigate(ADDTASK,{state:{empEmail:email}})
  }

  return (
    <div>
      <h1>Manager Home</h1>
      <div>
        <h3>Add Employee</h3>
        <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAddEmployee}>Add Employee</button>
      <button onClick={handleAssignTask}>Assign Task</button>
      </div>
    </div>
  )
}

export default ManagerHome