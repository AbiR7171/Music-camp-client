
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Feedback from '../../../Components/Feedback';

const ManageClassRow = ({cla, index, refetch}) => {

  console.log(cla);


  
   
    const[axiosSecure]=useAxiosSecure()
   


    const handleDeny = ()=>{

      axiosSecure.patch(`/class/deny/${cla._id}`)
      .then(res =>{
        if(res.data.modifiedCount > 0){
          refetch()
                  Swal.fire({
                      position: 'top-center',
                      icon: 'success',
                      title: 'class Deny',
                      showConfirmButton: false,
                      timer: 1500
                    })
        }
      })
        // fetch(`https://sports-camp-server-seven.vercel.app/class/deny/${cla._id}`,{
        //     method:"PATCH",
        //     headers:{
        //       authorization :`Bearer ${localStorage.getItem("Music-access-token")}`
        //     }
        //  })
        //  .then(res => res.json())
        //  .then(data =>{
        //     console.log(data);
        //     if(data.modifiedCount){
        //         refetch()
        //         Swal.fire({
        //             position: 'top-center',
        //             icon: 'success',
        //             title: 'class Deny',
        //             showConfirmButton: false,
        //             timer: 1500
        //           })
        //     }
        //  })
    }


    const handleAprove =()=>{


      axiosSecure.patch(`/class/approve/${cla._id}`)
      .then(res =>{
        if(res.data.modifiedCount > 0){
          refetch()
                  Swal.fire({
                      position: 'top-center',
                      icon: 'success',
                      title: 'class approve',
                      showConfirmButton: false,
                      timer: 1500
                    })
        }
      })
        //  fetch(`https://sports-camp-server-seven.vercel.app/class/approve/${cla._id}`,{
        //     method:"PATCH",
        //     headers:{
        //       authorization :`Bearer ${localStorage.getItem("Music-access-token")}`
        //     }
        //  })
        //  .then(res => res.json())
        //  .then(data =>{
        //     console.log(data);
        //     if(data.modifiedCount){
        //         refetch()
        //         Swal.fire({
        //             position: 'top-center',
        //             icon: 'success',
        //             title: 'class approve',
        //             showConfirmButton: false,
        //             timer: 1500
        //           })
        //     }
        //  })
    }


    return (
        <tr >
        <th>{index +1}</th>
        <td>{cla.className}</td>
        <td><img src={cla.image} className='w-16  rounded-lg hover:w-52  duration-150' /></td>
        <td className='text-start'>{cla.name}</td>
        <td className='text-center'>{cla.email}</td>
        <td>{cla.seats}</td>
        <td>{cla.price}</td>
        <td className='text-end'>{cla.status}</td>
        <td>
          <div className='flex space-x-2 items-center'>
          <button disabled={cla.status === "approve" || cla.status === "deny"} onClick={handleAprove} className="btn btn-xs bg-orange-400">Approve</button>
          <button  onClick={handleDeny} disabled={cla.status === "approve" || cla.status === "deny"} className="btn btn-xs bg-orange-400">Deny</button>
          {/* The button to open modal */}
           <div>
           <Feedback id={cla._id}/>
           </div>
          </div>
        </td>
      </tr>
    );
};

export default ManageClassRow;