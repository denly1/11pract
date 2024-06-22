import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <h1>The Smokin Burger</h1>
                <p className="price">Only $10.54</p>
                <div className="discount">
                    <span>15% DISCOUNT</span><br />
                    On your first order, if you order through our App!
                </div>
                <a href="#" className="order-btn">ORDER ONLINE</a>
                <img src="images/burger.png" alt="Smokin Burger" className="burger-img" />
            </div>
        </section>
    );
}

export default Hero;
