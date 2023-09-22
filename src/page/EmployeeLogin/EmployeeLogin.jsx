import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EMPLOYEEHOME } from '../../router/keys';

const EmployeeLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const {employees} = useSelector(state => state.auth);
  console.log(employees)

  const validEmployee =(datas,email,password) =>{
    for(const data of datas){
      if(data.email === email && data.password === password){
        return true;
      }
      else{
        return false;
      }
    }
  }
  const handleLogin =()=>{
    if(validEmployee(employees,email,password)){
        navigate(EMPLOYEEHOME,{state:{empEmail:email}});
    }
    else{
      alert("Invalid Credential");
    }
  }
  return (
    <div>
      <h1>Employee Login</h1>
      <div>
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
      <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default EmployeeLogin