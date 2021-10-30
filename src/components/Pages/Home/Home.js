import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
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
        <div id="home" className="mb-3">

            <Banner></Banner>


            <div id="hotels" className="mb-3">
                <h2 className="mt-3">Our hotels</h2>
                <hr />
                {
                    isLoading && <Spinner className="fs-3" animation="border" variant="black" />
                }

                <div className="container pb-3">
                    <Row className="g-4">
                        {
                            newHotels.map(hotel => <Col xl={4} lg={4} md={6} sm={12}>
                                <CardGroup>
                                    <Card className="py-3 data-cart">

                                        <Card.Img variant="top" className="w-75 mx-auto" src={hotel.img} />

                                        <Card.Body>
                                            <Card.Title><h6><strong>{hotel.name}</strong></h6></Card.Title>
                                            <Card.Title><h6>$ {hotel.charge} per/day</h6></Card.Title>
                                            <Card.Text>
                                                <small> {hotel.description.slice(0, 55)}...</small>
                                            </Card.Text>
                                        </Card.Body>
                                        <Link to={`/booking/${hotel._id}`}><button className="btn btn-primary">Booking now</button></Link>


                                    </Card>
                                </CardGroup>
                            </Col>)
                        }
                    </Row>


                </div>
            </div>
            <Link to="/hotels">See in the more hotels</Link>


        </div>
    );
};

export default Home;