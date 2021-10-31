import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1>London travel your dream is our first priority</h1>
                <p>Have a nice tour</p>
                <Link to="/contact"><button className="btn btn-danger">Contact us</button></Link>
            </div>
        </div>
    );
};

export default Banner;