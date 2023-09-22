import React from 'react'
import { useNavigate } from 'react-router-dom'
import { EMPLOYEELOGIN,MANAGERLOGIN } from '../../router/keys'

const Home = () => {
    const navigate = useNavigate()

    const handleManagerClick = () =>{
        navigate(MANAGERLOGIN);
    }

    const handleEmployeeClick = () =>{
        navigate(EMPLOYEELOGIN);
    }

  return (
    <div>
        <h1>Employee Task Manager App</h1>
        <div>
            <button onClick={handleManagerClick}>Manager Login</button>
            <button onClick={handleEmployeeClick}>Employee Login</button>
        </div>
    </div>
  )
}

export default Home