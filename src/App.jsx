import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import { Button } from '@material-ui/core';

import './App.css';

const App = () => {

  const adminUser = {
    email: 'matteorascioni@gmail.com',
    password: 'admin123',
  }

  const [user, setUser] = useState({name: "", email: "",});

  // LOGIN
  const logIn = (details) => {
    if(details.email === adminUser.email && details.password === adminUser.password) {
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      alert("Details do not match: Please check your data");      
    }
  }

  // LOGOUT
  const logOut = () => {
    setUser({name: "", email: "",});
  }

  return (
    <div className="app">
      {
        (user.email !== "") ? (
          <div className="welcome">
            <h2>Welcome, <span>{ user.name }</span></h2>
            <Button onClick={logOut} variant="contained" color="primary">Logout</Button>
          </div>
        ) : (
          <LoginForm login={ logIn } />
        )
      } 
    </div>  
  );
}

export default App;
