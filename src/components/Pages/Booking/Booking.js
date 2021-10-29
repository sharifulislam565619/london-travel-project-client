import { React, useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
	const { id } = useParams()
	const [hotel, setHotel] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	const { user } = useAuth()


	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	const onSubmit = data => {
		const newData = data;
		newData.email = user?.email;
		newData.status = "pending"
		newData.Id = id;

		fetch("http://localhost:5000/booking", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(newData),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.acknowledged) {
					alert("Congratulation your order is proceed.")
					reset()
				}
			});
	};



	useEffect(() => {
		fetch(`https://polar-crag-36295.herokuapp.com/hotels/${id}`)
			.then(res => res.json())
			.then(data => {
				setHotel(data)
				setIsLoading(false)

			})
			.catch((error) => {
				console.log(error.message)
			})
	}, [])

	return (
		<div>

			<Row xs={1} md={2} className="g-4">

				<Col>
					{
						isLoading && <Spinner className="mt-5 fs-3" animation="border" variant="black" />
					}
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

				<form className="mt-5 place-order-form" onSubmit={handleSubmit(onSubmit)}>

					<input required placeholder="Your name" {...register("name")} />
					<input required type="email" placeholder="Your email" {...register("emailAddress")} />
					<input required placeholder="Your phone" type="number" {...register("phone",)} />
					<input
						{...register("date", { required: true })} type="date" />
					<textarea
						{...register("description", { required: true })}
						placeholder="Description" />
					<input type="submit" className="btn btn-primary" value="Order Place" />

				</form>

			</Row>


		</div>
	);
};

export default Booking;