import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MANAGERHOME } from '../../router/keys';
import { addManager } from '../../redux/reducer/authReducer';

const ManagerLogin = () => {
  const navigate = useNavigate()
  const {manager} = useSelector(state => state.auth)
  console.log(manager)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if(manager.length !== 0){
      // alert("One Manager can be created");
      if(manager[0].email===email && manager[0].password===password){
        navigate(MANAGERHOME);
      }
      else{
        alert("Wrong Credential");
      }
    }
    else{
      const managerData = { email, password};
      dispatch(addManager(managerData));
      navigate(MANAGERHOME);
    }

  };

  return (
    <div>
      <h2>Manager Login</h2>
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
  );
};

export default ManagerLogin;
