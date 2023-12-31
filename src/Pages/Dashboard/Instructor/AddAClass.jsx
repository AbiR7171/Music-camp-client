import React, { useContext } from 'react';
import { AuthContext } from '../../../Routes/AuthProvider';
import Swal from 'sweetalert2';
import UseSectionHeader from '../../Hooks/useSectionHeader';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const AddAClass = () => {
    const {user}=useContext(AuthContext);
    const[axiosSecure]=useAxiosSecure()
   
    const hadleSubmit = event =>{


        event.preventDefault()
        const from = event.target;

        const className = from.className.value;
        const name = from.name.value;
        const email = from.email.value;
        const seats = from.seats.value;
        const seat = parseFloat(seats)
       
        const prices = from.price.value;
        const price = parseFloat(prices)
        const image = from.image.value;

       const classes ={className,  name, email, seat, price, image, status:"pending", totalEnrolled:0}
       console.log(className, name, email, seats, price);


       axiosSecure.post("/classes", {
        className,  name, email, seat, price, image, status:"pending", totalEnrolled:0
       }).then(res =>{
        if(res.data.insertedId){
          from.reset()
          Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'class added',
              showConfirmButton: false,
              timer: 1500
            })
        }
       })

       

      //  fetch("https://sports-camp-server-seven.vercel.app/classes", {
      //   method:"POST",
      //    headers:{
      //       "content-type": "application/json",
      //       authorization :`Bearer ${localStorage.getItem("Music-access-token")}`
      //    },
      //    body:JSON.stringify(classes)
      //  })
      //  .then(res => res.json())
      //  .then(data =>{
      //   console.log(data);
      //   if(data.insertedId){
      //     from.reset()
      //       Swal.fire({
      //           position: 'top-center',
      //           icon: 'success',
      //           title: 'class added',
      //           showConfirmButton: false,
      //           timer: 1500
      //         })
      //   }
      //  })

       
        
    }
    return (
        <div className='mt-10 mb-10'>
          <UseSectionHeader title="Add A Class"/>
                <form onSubmit={hadleSubmit} className="w-[600px] mx-auto">
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
        Add
      </button>
    </form>
        </div>
    );
};

export default AddAClass;