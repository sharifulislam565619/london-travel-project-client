import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Hotel from '../Hotel/Hotel';
import './Hotels.css';

const Hotels = () => {
    const [hotels, setHotels] = useState([])
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
        <div id="hotels" className="mb-5">
            <h2 className="mt-3">Our hotels</h2>
            <hr />
            {
                isLoading && <Spinner className="fs-3" animation="border" variant="black" />
            }

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