import { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';

const ManageOrders = () => {
   const [orders, setOrders] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [approved, setApproved] = useState(true)


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
      <div>
         <h2 className="mt-3 text-success">Manage All Orders</h2>
         <hr className="w-25" />
         {
            isLoading && <Spinner className="fs-3" animation="border" variant="black" />
         }

         <Table striped bordered hover>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Approval</th>
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
                     <td>{order.email}</td>
                     <td>{order.phone}</td>
                     <td className={order.status === "approved" ? "text-primary" : "text-dark"}>{order.status}</td>
                     <td><button onClick={() => handleOrders(order._id)} className="btn btn-outline-dark">Accept</button></td>
                     <td><button onClick={() => handleDelete(order._id)} className="btn btn-danger">Delete</button></td>
                  </tr>

               </tbody>)
            }
         </Table>

      </div>
   );
};

export default ManageOrders;