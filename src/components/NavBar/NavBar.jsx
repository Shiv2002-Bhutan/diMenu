import React, { useContext, useState } from 'react';
import './NavBar.css';

// Importing the FontAwesomeIcon component and the required icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const NavBar = () => {
    const [menu, setMenu] = useState("Home");

    const {getTotalAmount} = useContext(StoreContext);

    return (
        <div className='navbar'>
            <ul className='navbar-menu'>
                <Link to='/'onClick={() => setMenu("Home")} className={menu === 'Home' ? 'active' : ""}>Home</Link>
                <a href='#explore-menu'onClick={() => setMenu("Menu")} className={menu === 'Menu' ? 'active' : ""}>Menu</a>
                <a href='#footer'onClick={() => setMenu("Contact us")} className={menu === 'Contact us' ? 'active' : ""}>Contact us</a>
            </ul>
            <div className="navbar-right">
                <div className="search-icon">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="navbar-search-icon">
                    <Link to ="/Card"><FontAwesomeIcon icon={faHamburger} /></Link>
                    <div className={getTotalAmount()===0?"":"dot"}></div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
