import logo from './logo.png';
import './App.css';
import React, {useState} from "react";
import { ButtonGroup, Button, Row, Container, Col} from 'react-bootstrap';
import axios from 'axios'
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'

function Enter() {
    let history = useHistory();
    const enter = () => {
        history.push('./login')
    };
    return (
        <div className = 'enter'>
            <img src={logo}></img>
            <h1>Welcome to vacation hacker!</h1>
            <h1>Login/Create an acount to continue </h1>
        </div>
    )
}

export default Enter;