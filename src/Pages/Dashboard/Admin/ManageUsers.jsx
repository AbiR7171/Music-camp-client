import React, { useState } from 'react';
import useUsers from '../../Hooks/useUsers';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageUsers = () => {

    const [users, refetch]=useUsers()
    const[axiosSecure]=useAxiosSecure()
    console.log(users);

    const handleMakeInstructor =(user)=>{

        axiosSecure.patch("/users/instructor", {
            email: user.email
        })
        .then(res => {
            console.log(res);
            if(res.data.modifiedCount >0 ){
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `${user.name} is instructor Now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


    const hanldeMakeAdmin = (user)=>{
            axiosSecure.patch("/users/admin", {
                email: user.email
            })
            .then(res => {
                console.log(res);
                if(res.data.modifiedCount >0 ){
                    refetch()
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} is admin`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        
    }

    const handleUserDeleter =user=>{


        fetch(`http://localhost:5000/users/${user._id}`, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `${user.name} deleted`,
                    showConfirmButton: false,
                    timer: 1500
                  })

            }
        })
        

    }


    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table font-serif ">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Image</th>
        <th>Email</th>
        <th>Role</th>
        <th className='text-center'>Manage Role</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index)=>  <tr>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>
            <img src={user.photo} className='w-12 rounded-xl hover:w-52 duration-150' />
        </td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
         <div className='space-x-3'>
         <button disabled={user?.role === "admin"} onClick={()=>hanldeMakeAdmin(user)} className="btn btn-xs bg-orange-500 text-black">Make admin</button>
         <button onClick={()=>handleMakeInstructor(user)} disabled={user?.role === "instructor"} className="btn btn-xs bg-orange-500 text-black">Make instructor</button>
         </div>
        </td>
        <td>
        <button onClick={()=> handleUserDeleter(user)} className="btn btn-circle btn-outline">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
         </button>
        </td>
      </tr>
      )}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUsers;