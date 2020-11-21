import logo from '../images/logo.png';
//import './App.css';
import React, {useState} from "react";
import { ButtonGroup, Button, Row, Container, Col} from 'react-bootstrap';
import axios from 'axios'
import {Link} from 'react-router-dom'

function Register() {
  const [userid, useridInput] = useState('')
  const [pw, pwInput] = useState('')
  const [homeairport, homeairportInput] = useState('')
  const [loginStatus, setLoginStatus] =  useState('')

//===================================================================================================================
  const register = () => {
    axios.post('http://localhost3001/register', { //// change this
      userID: userid, 
      password: pw,
      homeairport: homeairport
    }).then((response)=> {
      console.log(response);
    });
  };
//====================================================================================================================
  return (
    <div className = "register">
      <div className = "registerinput">
        <img src={logo}></img>
        <h1>Not yet registered? </h1>
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
        <label> Home Airport</label>
        <input //home airport input 
          type = "text"
          onChange = {(e) => {
            homeairportInput(e.target.value);
          }}
        />
      </div>
      <Link to='login'>
        <Button variant="outline-primary" onClick = {register}>Register</Button>
      </Link>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default Register;
