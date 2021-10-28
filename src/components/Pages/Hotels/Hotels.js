import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Hotel from '../Hotel/Hotel';
import './Hotels.css';

const Hotels = () => {
    const [hotels, setHotels] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/hotels')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])
    return (
        <div id="hotels" className="mb-5">
            <h2 className="mt-3">Our hotels</h2>
            <hr />

            <div className="container">
                <Row className="g-4">
                    {
                        hotels.map(hotel => <Hotel
                            key={hotel._id}
                            hotel={hotel}
                        ></Hotel>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Hotels;