import React from 'react';
import {Link} from 'react-router-dom';
import { ButtonGroup, Button, Row, Container, Col} from 'react-bootstrap';
import './searchmain.css'
function SearchMain() {
    return (
        <div className='searchmain-container'>
        
                <h1>find flights</h1>
                <Link to='searchbasic'>
                    <Button>Basic</Button>
                </Link>
           
            <div className='track'>
                <h1>find and save flights based on your preferences</h1>
                <Link to='searchadvanced'>
                    <Button>Advanced</Button>
                </Link>
            </div>
        </div>
       
    );
}

export default SearchMain;