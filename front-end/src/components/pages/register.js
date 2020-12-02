import logo from '../images/logo.png';
//import './App.css';
import React, {useState} from "react";
import { ButtonGroup, Button, Row, Container, Col} from 'react-bootstrap';
import Axios from 'axios'
import {Link} from 'react-router-dom'
import './loginregister.css'

const base_url = 'http://127.0.0.1:5000/'           //////change this

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID : '',
            userPassword : '',
            homeAirport : '',
            isRegistered : false,
        }
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    register = e => {
        e.preventDefault()
<<<<<<< HEAD
        const {userID, password, homeAirport} = this.state
        //------------for testing use----------------------
        // this.setState({
        //     isRegistered: true
        // });
        //------------for testing use----------------------
        Axios.post(base_url + 'users/register/create', {                              //// change this
=======
        const {userID, userPassword, homeAirport} = this.state
        Axios.post(base_url + '/register', {                              //// change this
>>>>>>> 4905256ff2139ae1fffa9911c860e3b7f3c7193a
            'user': {
                'userID' : userID,
                'userPassword': userPassword,
                'homeAirport': homeAirport
            }
        }).then((response)=> {
            console.log(response);
            this.setState({
                isRegistered: true
            });
        }, (error)=> {
            console.log(error);
        });       
    }


    render() {
        const isRegistered =  this.state.isRegistered;
        return (
            <div className = "register">
              <div className = "registerinput">
                <img src={logo}></img>
                <h1>Not yet registered? </h1>
                <label> UserID</label>
                <input //userid input
                  type = "text" 
                  name = "userID"
                  value = {this.state.userID}
                  placeholder = "userID"
                  onChange={this.changeHandler}
                />

                <label> userPassword</label>
                <input //useruserPassword input 
                  type = "text"
                  name = "userPassword"
                  value = {this.state.userPassword}
                  placeholder = "userPassword"
                  onChange={this.changeHandler}
                />

                <label> Home Airport</label>
                <input //home airport input 
                  type = "text"
                  name = "homeAirport"
                  value = {this.state.homeAirport}
                  placeholder = "homeAirport"
                  onChange={this.changeHandler}
                />
                {isRegistered && (
                    <div className="text">
                        <h3>You have successfully registered! Now log in to view your profile</h3>
                    </div>
                )}
              </div>
                <div className='registerbutton'>
                    <Button variant="outline-primary" onClick = {this.register}>Register</Button> 
                </div>
            </div>
          );
    }
}