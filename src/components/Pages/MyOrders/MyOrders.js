import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const MyOrders = () => {
   const { user } = useAuth()
   const [orders, setOrders] = useState([])
   const [deleted, setDeleted] = useState(true)
   const [isLoading, setIsLoading] = useState(true)


   useEffect(() => {
      fetch(`https://polar-crag-36295.herokuapp.com/myOrders/${user.email}`)
         .then(res => res.json())
         .then(data => {

            setOrders(data)
            setIsLoading(false)

         });
   }, [deleted]);


   const handleDelete = (id) => {
      setDeleted(true)
      const proceed = window.confirm("Are you sure delete this booking ??")
      if (proceed) {
         const url = `https://polar-crag-36295.herokuapp.com/delete/${id}`


         fetch(url, {
            method: 'DELETE',
            headers: {
               "content-type": "application/json"
            },
            body: JSON.stringify(),
         })
            .then(res => res.json())
            .then(result => {
               if (result.deletedCount > 0) {
                  setDeleted(false)
               }
            })
      }
   }



   return (
      <div>

         <h2 className="text-success">Your total order is : {orders.length}</h2>
         <hr className="w-25" />
         {
            isLoading && <Spinner className="fs-3" animation="border" variant="black" />
         }




         <Table responsive="md sm">
            <thead>
               <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Delete</th>
               </tr>
            </thead>
            {
               orders.map((order, index) => <tbody
                  key={order._id}
               >
                  <tr>
                     <td>{index + 1}</td>
                     <td>{order.name}</td>
                     <td>{order.emailAddress}</td>
                     <td>{order.phone}</td>
                     <td className={order.status === "approved" ? "text-primary" : "text-dark"}>{order.status}</td>

                     <td><button onClick={() => handleDelete(order._id)} className="btn btn-danger">Delete</button></td>
                  </tr>

               </tbody>)
            }
         </Table>
      </div>
   );
};

export default MyOrders;