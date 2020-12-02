import logo from '../images/logo.png';
//import './App.css';
import React, {useState} from "react";
import { ButtonGroup, Button, Row, Container, Col} from 'react-bootstrap';
import Axios from 'axios'
import {Link} from 'react-router-dom'

const base_url = 'http://localhost3001/'           //////change this

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID : '',
            password : '',
            homeAirport : '',
            isLoggedIn : false,
        }
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    login = async(e) => {
        e.preventDefault()
        const {userID, password} = this.state
        //---------------do not delete-----------------
        localStorage.setItem('userID', userID);
        //--------------for testing use----------------
        Axios.post(base_url + 'users/login', {                              //// change this
            'user': {
                'userID' : userID,
                'password': password,
            }
        }).then((response)=> {
            if (response.data.message){
              console.log(response.data.message)
              this.setState({
                loggedInFailed: true 
              })
            } else {
                console.log(response);
                this.setState({
                    isLoggedIn: true 
                })
                localStorage.setItem('userID', userID);// saved to local storage as
            }
        });      
    }

    render() {
        const isRegistered =  this.state.isRegistered;
        return (
            <div className = "login">
              <div className = "logininput">
                <img src={logo}></img>
                <h1>Register or Log In to search for routes and hotels!</h1>
                <label> UserID</label>
                <input //userid input
                  type = "text" 
                  name = "userID"
                  value = {this.state.userID}
                  placeholder = "userID"
                  onChange={this.changeHandler}
                />

                <label> Password</label>
                <input //password input 
                  type = "text"
                  name = "password"
                  value = {this.state.password}
                  placeholder = "password"
                  onChange={this.changeHandler}
                />

              </div>
              <Link to='register'>
                <Button variant="outline-primary">Register Instead</Button>
              </Link>
                <Button variant="outline-primary" onClick = {this.login.bind(this)}>Log In</Button>
              {this.loggedInFailed && <div>
                <p>Incorrect userID/password, please try again!</p></div>}
            </div>
          );
    }
}