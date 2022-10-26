import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-section'>
            <div className="container">
                <div className='header'>
                    <div className='logo-section'>
                        <img src="logo.png" alt="" />
                        <h2>Meal DB</h2>
                    </div>
                    <nav className='nav-section'>
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                        <a href="#">Food Review</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;