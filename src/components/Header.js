import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <img src="images/logo.png" alt="BurgerNation Logo" className="logo" />
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Our Menu</a>
                    <a href="#">Offers</a>
                    <a href="#">About</a>
                    <a href="#">Franchise</a>
                    <a href="#">Contact</a>
                    <a href="#" className="download-app">Download App</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
