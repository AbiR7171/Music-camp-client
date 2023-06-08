import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Routes/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateClass = () => {
 

    const {user}=useContext(AuthContext)

    const[oldData, setOldData]=useState([])
    
   

    useEffect(()=>{
      fetch(`http://localhost:5000/myClasses/${data.id}`)
      .then(res => res.json())
      .then(data => {
        setOldData(data);
      })
    },[])


    const handleUpdate = event =>{

      

        event.preventDefault()
        const from = event.target;

        const className = from.className.value;
        const seats = from.seats.value;
        const  price = from.price.value;
        const image = from.image.value;

    
       const updateData = {className,  seats, price, image}

       fetch(`http://localhost:5000/classes/${data.id}`, {
        method:"PUT",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(updateData)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.modifiedCount >0){
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'class update',
            showConfirmButton: false,
            timer: 1500
          })
        }
       })
    }


    return (
        <div>
             <form onSubmit={handleUpdate}  className="w-[600px] mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">Class Name</label>
        <input
        name='className'
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-green-500 bg-opacity-20"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Instructor Name</label>
        <input
        name='name'
          type="text"
          className="w-full px-3 py-2 bg-green-500 bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
          defaultValue={user?.displayName}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Instructor Email</label>
        <input
          name='email'
          type="email"
          className="w-full px-3 py-2 bg-green-500 bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
          defaultValue={user?.email}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Available Seats</label>
        <input
          name='seats'
          type="number"
          className="w-full px-3 py-2 border border-gray-300 bg-green-500 bg-opacity-20 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
        name='price'
          type="text"
          className="w-full px-3 py-2 border border-gray-300  bg-green-500 bg-opacity-20 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
        />
      </div>
      <div>
        <label htmlFor="">Class Image</label>
        {/* <input name='image' type="file" className="file-input block mt-1 mb-3 file-input-bordered file-input-success w-full max-w-xs" /> */}
         <input
         name='image'
          type="text"
          className="w-full px-3 py-2 mb-2 bg-green-500 bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
        />
      </div>

      <button
        type="submit"
        className="px-1 py-3 w-full bg-green-800 text-white rounded-md hover:bg-green-600"
      >
        update
      </button>
    </form>
        </div>
    );
};

export default UpdateClass;