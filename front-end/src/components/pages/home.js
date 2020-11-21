import React from 'react';
import logo from '../images/logo.png';
import '../../App.css'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../Navbar/Button.css'
function Home() {
    return (
        <div className='home-container'>
            <img className='homelogo' src={logo}></img>
            <h1 className='home'> VACATION AWAITS</h1>
            <h1>Welcome to Travel China, Sign In/Up to save routes!</h1>
            <div className="homebutton">
                <Link to='searchmain'>
                    <Button className='btns' buttonStype= 'btn--outline'
                        buttonSize='btn--large'>Search</Button>
                </Link>
            </div>
            <div className="homebutton">
                <Link to='login'>
                    <Button className='btns' buttonStype= 'btn--outline'
                        buttonSize='btn--large'>Log In</Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;