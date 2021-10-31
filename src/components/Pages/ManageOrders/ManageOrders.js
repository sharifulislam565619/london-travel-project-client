import { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import './ManageOrders.css';


const ManageOrders = () => {
   const [orders, setOrders] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [approved, setApproved] = useState(true)

   // console.log(orders)

   useEffect(() => {
      fetch("https://polar-crag-36295.herokuapp.com/manageOrders")
         .then(res => res.json())
         .then(data => {
            setOrders(data)
            setIsLoading(false)
         })
   }, [approved])

   const handleOrders = (id) => {
      setApproved(true)
      const url = `https://polar-crag-36295.herokuapp.com/status/${id}`

      const status = {
         status: "approved"
      }

      fetch(url, {
         method: 'PUT',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(status),
      })
         .then(res => res.json())
         .then(result => {
            if (result.modifiedCount > 0) {
               setApproved(false)
            }
         })
   }

   const handleDelete = (id) => {
      setApproved(true)
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
                  setApproved(false)
               }
            })
      }
   }


   return (
      <div className="my-table">
         <h2 className="mt-3 text-success ">Manage All Orders</h2>
         <hr className="w-25" />
         {
            isLoading && <Spinner className="fs-3" animation="border" variant="black" />
         }

         <Table responsive="sm md">
            <thead>
               <tr>
                  <th className="table-head">#</th>
                  <th>Name</th>
                  <th className="table-head">Email Address</th>
                  <th className="table-head">Phone</th>
                  <th>Order id</th>
                  <th>Status</th>
                  <th>Delete</th>
               </tr>
            </thead>
            {
               orders.map((order, index) => <tbody
                  key={order._id}
               >
                  <tr>
                     <td className="table-body">{index + 1}</td>
                     <td>{order.name}</td>
                     <td className="table-body">{order.emailAddress}</td>
                     <td className="table-body">{order.phone}</td>
                     <td className="table-body">{order.order_id}</td>

                     <td><button onClick={() => handleOrders(order._id)} className={order.status === "approved" ? "btn btn-outline-dark text-primary" : "btn btn-outline-dark"}>{order.status}</button></td>
                     <td><button onClick={() => handleDelete(order._id)} className="btn btn-danger">Delete</button></td>
                  </tr>

               </tbody>)
            }
         </Table>

      </div>
   );
};

export default ManageOrders;