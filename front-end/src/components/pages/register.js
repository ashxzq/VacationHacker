import logo from '../images/logo.png';
//import './App.css';
import React, {useState} from "react";
import { ButtonGroup, Button, Row, Container, Col} from 'react-bootstrap';
import Axios from 'axios'
import {Link} from 'react-router-dom'
import './loginregister.css'

const base_url = 'http://localhost3001/'           //////change this

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID : '',
            password : '',
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
        const {userID, password, homeAirport} = this.state
        //------------for testing use----------------------
        // this.setState({
        //     isRegistered: true
        // });
        //------------for testing use----------------------
        Axios.post(base_url + 'users/register/create', {                              //// change this
            'user': {
                'userID' : userID,
                'password': password,
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

                <label> Password</label>
                <input //password input 
                  type = "text"
                  name = "password"
                  value = {this.state.password}
                  placeholder = "password"
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