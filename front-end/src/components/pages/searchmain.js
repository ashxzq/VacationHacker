import React from 'react';
import {Link} from 'react-router-dom';
import { ButtonGroup, Button, Row, Container, Col} from 'react-bootstrap';

function SearchMain() {
    return (
        <div className='searchmain-container'>
            <h1>find flights</h1>
            <Link to='searchbasic'>
                <Button>Basic</Button>
            </Link>
            <h1>find flights based on your location</h1>
            <Link to='searchadvanced'>
                <Button>Advanced</Button>
            </Link>
        </div>
       
    );
}

export default SearchMain;