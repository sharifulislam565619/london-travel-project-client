import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            <h2 className="mt-3 text-primary">All Of Our Hotels</h2>
            <hr className="w-25" />
            {
                isLoading && <Spinner className="fs-3 my-5" animation="border" variant="black" />
            }

            <div className="container pb-3">
                <Row className="g-4">
                    {
                        hotels.map(hotel => <Hotel
                            key={hotel._id}
                            hotel={hotel}
                        ></Hotel>)
                    }
                </Row>


            </div>
            <Link to="/home" className="btn btn-dark">Back to home page</Link>
        </div>
    );
};

export default Hotels;