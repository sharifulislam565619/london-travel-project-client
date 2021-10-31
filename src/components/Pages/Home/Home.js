import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Hotel from '../Hotel/Hotel';
import './Home.css';

const Home = () => {
    const [hotels, setHotels] = useState([])
    const newHotels = hotels.slice(0, 6)
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {


        fetch('https://polar-crag-36295.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => {
                setHotels(data)
                setIsLoading(false)
            })



    }, [])

    return (
        <div id="home" className="home">

            <Banner></Banner>
            <div id="hotels" className="pb-3">
                <h2 className="mt-3 text-primary">Our Hotels</h2>
                <hr />
                {
                    isLoading && <Spinner className="fs-3" animation="border" variant="black" />
                }

                <div className="container pb-3">
                    <Row className="g-4">
                        {
                            newHotels.map(hotel => <Hotel
                                key={hotel._id}
                                hotel={hotel}
                            ></Hotel>)
                        }
                    </Row>


                </div>
            </div>
            <Link to="/hotels">See in the more hotels ►►</Link>
            <About />
            <Contact />


        </div>
    );
};

export default Home;