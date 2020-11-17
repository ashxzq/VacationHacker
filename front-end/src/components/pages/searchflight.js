import logo from '../../logo.png';
//import './App.css';
import React, {useState} from "react";
import { ButtonGroup, Button, Row, Container, Col} from 'react-bootstrap';
import axios from 'axios'


function SearchFlight() {
  const [ori, oriInput] = useState('')
  const [des, desInput] = useState('')
  const [fc, fcInput] =  useState('')
  const [fs, fsInput] = useState('')
  const [routes, setRoutes] = useState('')

  const gosearch = () => {
    axios.post('http://localhost3001/register', {   ///////modify this!!!!
      origin: ori,
      dest: des,
      fclass: fc,
      fstop: fs 
    }).then((response)=> {
      if (response.data.message){
        setRoutes(response.data.message)
      } else {
        setRoutes(response.data[0].userID)
      }
    });
  };

  return (
    <div className = "search">
      <div className = "searchelements">
        <img src={logo}></img>
        <h1> Enter origin/destination/class/stops to search for flights!</h1>
        <label> From:</label>
        <input //origin input
          type = "text" 
          onChange = {(e)=> {
            oriInput(e.target.value);
          }}
        />
        <label> To:</label>
        <input //destination input 
          type = "text"
          onChange = {(e) => {
            desInput(e.target.value);
          }}
        />
        <label>Class: Economy/Business</label>
        <input //class input 
          type = "text"
          onChange = {(e) => {
            fcInput(e.target.value);
          }}
        />
        <label> Stops:none/one-stop/two-stop</label>
        <input //stops input 
          type = "text"
          onChange = {(e) => {
            fsInput(e.target.value);
          }}
        />
      </div>
      <ButtonGroup size = "1g" className = "reglogin">
        <Button variant="outline-primary" onClick = {gosearch}>Search</Button>
      </ButtonGroup>
      <h1>Availabe routes:</h1>
      <h1>{routes}</h1>
    </div>
  );
}

export default SearchFlight;
