import React from 'react';
import logo from '../images/logo.png';
import '../../App.css'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../Navbar/Button.css'
import './home.css'
function Home() {
    return (
        <div className='home-container'>
            <img className='homelogo' src={logo}></img>
            <h1 className='home'> VACATION AWAITS</h1>
            <h1>Welcome to Vacation Hacker, Sign In/Up to save routes!</h1>
            <div className="homebutton">
                <Link to='searchmain'>
                    <Button className='btns' buttonStype= 'btn--outline'
                        buttonSize='btn--large'>Search <i class="fas fa-search"></i></Button>
                </Link>
            </div>
            <div className="homebutton">
                <Link to='login'>
                    <Button className='btns' buttonStype= 'btn--outline'
                        buttonSize='btn--large'>Log In <i class="fas fa-sign-in-alt"></i></Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;