import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import Swal from 'sweetalert2';
import { BsFillSendCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const SelectClassRow = ({clas, index,refetch}) => {

    const {_id, price, image, instructor, clasName}=clas

    const handleDetete = id =>{
       fetch(`https://sports-camp-server-seven.vercel.app/mySelected/${id}`,{
        method:"DELETE",
        headers:{
          authorization :`Bearer ${localStorage.getItem("Music-access-token")}`
        }
       })
       .then(res => res.json())
       .then(data =>{
        console.log(data);
        if(data.deletedCount > 0){
          refetch()
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Deleted',
            showConfirmButton: false,
            timer: 1500
          })
        }
       })
    }
    return (
        <tr>
        <th>{index +1}</th>
        <td>{clasName}</td>
        <td><img src={image} className='w-14 h-10' alt="" /></td>
        <td>{instructor}</td>
        <td>{price}</td>
        <td className='text-3xl text-red-700'>
        <AiFillDelete onClick={()=>handleDetete(_id)}/>
        </td>
        <td className='text-3xl'>
        <Link to={`/dashboard/student/payment/${_id}`}>
        <button className='text-2xl bg-ora flex items-center gap-2'><BsFillSendCheckFill/></button>
        </Link>
        </td>
      </tr>
    );
};

export default SelectClassRow;