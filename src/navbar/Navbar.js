import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <li><Link to="/">All</Link></li>
                <li><Link to="/burgers">Burgers</Link></li>
                <li><Link to="/pizza">Pizza</Link></li>
                <li><Link to="/nachos">Nachos</Link></li>
            </nav>

        </div>
    );
};

export default Navbar;