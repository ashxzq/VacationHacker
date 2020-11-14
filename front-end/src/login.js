import logo from './logo.png';
import './App.css';
import React, {useState} from "react";
import { ButtonGroup, Button, Row, Container, Col} from 'react-bootstrap';
import axios from 'axios'


function Login() {
  const [userid, useridInput] = useState('')
  const [pw, pwInput] = useState('')
  const [loginStatus, setLoginStatus] =  useState('')

  const register = () => {
    axios.post('http://localhost3001/register', { //// change this
      userID: userid, 
      password: pw
    }).then((response)=> {
      console.log(response);
    });
  };

  const login = () => {
    axios.post('http://localhost3001/register', {
      userID: userid, 
      password: pw
    }).then((response)=> {
      if (response.data.message){
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data[0].userID)
      }
    });
  };

  return (
    <div className = "App">
      <div className = "logininput">
        <img src={logo}></img>
        <h1>Register or Log In to search for routes and hotels!</h1>
        <label> UserID</label>
        <input //userid input
          type = "text" 
          onChange = {(e)=> {
            useridInput(e.target.value);
          }}
        />
        <label> Password</label>
        <input //password input 
          type = "text"
          onChange = {(e) => {
            pwInput(e.target.value);
          }}
        />
      </div>
      <ButtonGroup size = "1g" className = "reglogin">
        <Button variant="outline-primary" onClick = {register}>Register</Button>
        <Button variant="outline-primary" onClick = {login}>Log In</Button>
      </ButtonGroup>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default Login;
