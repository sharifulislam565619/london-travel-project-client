import { React, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const [hotel, setHotel] = useState({})


    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/hotels/${id}`)
            .then(res => res.json())
            .then(data => setHotel(data))
            .catch((error) => {
                console.log(error.message)
            })
    }, [])

    return (
        <div>
            <Row xs={1} md={2} className="g-4">

                <Col>
                    <Card>
                        <Card.Img variant="top" className='w-75 m-3 mx-auto' src={hotel?.img} />
                        <Card.Body>
                            <Card.Title>{hotel?.name}</Card.Title>
                            <Card.Text>
                                {hotel?.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Booking;