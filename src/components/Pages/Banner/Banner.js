import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1>I am John Doe</h1>
                <p>And i am a Photographer</p>
                <Link to="/contact"><button>Contact us</button></Link>
            </div>
        </div>
    );
};

export default Banner;