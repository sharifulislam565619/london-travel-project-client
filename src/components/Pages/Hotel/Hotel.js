import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hotel.css';

const Service = (props) => {

    const { _id, img, charge, description, name } = props.hotel
    return (
        <Col xl={4} lg={4} md={6} sm={12}>
            <CardGroup>
                <Card className="py-3 data-cart">

                    <Card.Img variant="top" className="w-75 mx-auto" src={img} />

                    <Card.Body>
                        <Card.Title><h6><strong>{name}</strong></h6></Card.Title>
                        <Card.Title><h6>$ {charge} per/day</h6></Card.Title>
                        <Card.Text>
                            <small> {description.slice(0, 55)}...</small>
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/booking/${_id}`}><button className="btn btn-primary">Booking now</button></Link>


                </Card>
            </CardGroup>
        </Col>
    );
};

export default Service;