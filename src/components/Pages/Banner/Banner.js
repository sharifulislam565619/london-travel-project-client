import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Typewriter from 'typewriter-effect';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero-image">
            <div className="hero-text banner">
                <Typewriter
                    options={{
                        strings: 'London travel',
                        autoStart: true,
                        loop: true,
                    }}
                />



                <p>Have a nice tour</p>
                <Nav.Link as={HashLink} to="/home#contact"><button className="btn btn-danger">Contact us</button></Nav.Link>

            </div>
        </div>
    );
};

export default Banner;