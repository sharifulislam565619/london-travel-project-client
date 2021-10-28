import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hotel.css';

const Service = (props) => {
    console.log(props.hotel)
    const { _id, img, charge, description, name } = props.hotel
    return (
        <Col xl={4} lg={4} md={6} sm={12}>
            <CardGroup>
                <Card className="py-2 data-cart">

                    <Card.Img variant="top" className="w-75 mx-auto" src={img} />

                    <Card.Body>
                        <Card.Title><h6><strong>{name}</strong></h6></Card.Title>
                        <Card.Title><h6>{charge}</h6></Card.Title>
                        <Card.Text>
                            <small> {description.slice(0, 55)}...</small>
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/hotels/${_id}`}><button className="btn btn-primary">Book now</button></Link>

                </Card>
            </CardGroup>
        </Col>
    );
};

export default Service;