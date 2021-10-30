import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const AddHotels = () => {


   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const onSubmit = data => {
      fetch('https://polar-crag-36295.herokuapp.com/addHotel', {
         method: "POST",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(result => {
            if (result.acknowledged) {
               alert("Wow The hotel is successfully added!!")
               reset()
            }
         })

   };




   return (
      <div>
         <h2 className="text-success">Add a new hotel</h2>
         <hr className="w-25" />

         <form className="mt-5 place-order-form" onSubmit={handleSubmit(onSubmit)}>

            <input required placeholder="Hotel name" {...register("name")} />

            <input required placeholder="Hotel charge" type="number" {...register("charge",)} />
            <input required placeholder="Image url/link" type="text" {...register("img",)} />

            <textarea
               {...register("description", { required: true })}
               placeholder="Description" />

            <input type="submit" className="btn btn-primary" value="Add the Hotel" />

            <Link to="/home">	<button className="btn btn-outline-dark">back to home page</button></Link>
         </form>
      </div>
   );
};

export default AddHotels;