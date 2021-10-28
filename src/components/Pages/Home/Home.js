import React from 'react';
import Banner from '../Banner/Banner';
import Hotels from '../Hotels/Hotels';
import './Home.css';

const Home = () => {
    return (
        <div id="home">

            <Banner></Banner>
            <Hotels></Hotels>

        </div>
    );
};

export default Home;