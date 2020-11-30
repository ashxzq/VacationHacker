import React, {useState} from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import App from '../../App';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('userID') ? true : false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    };


    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    TravelChina <i class="far fa-paper-plane"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className= 'nav-item'>
                        <Link to='/' className= 'nav-links' onClick ={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className= 'nav-item' 
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to='/searchmain' className= 'nav-links' onClick ={closeMobileMenu}>
                            Search <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className= 'nav-item'>
                        <Link to='/profile' className= 'nav-links' onClick ={closeMobileMenu}>
                            Profile
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to='/log-in' className= 'nav-links-mobile' onClick ={closeMobileMenu}>
                            Log In
                        </Link>
                    </li>
                </ul>
                <Button/>
            </nav>
        </>
    );
}

export default Navbar;