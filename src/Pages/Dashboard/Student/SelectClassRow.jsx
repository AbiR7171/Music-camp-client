import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import Swal from 'sweetalert2';


const SelectClassRow = ({clas, index,refetch}) => {

    const {_id, price, image, instructor, clasName}=clas

    const handleDetete = id =>{
       fetch(`http://localhost:5000/myBooking/${id}`,{
        method:"DELETE"
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
      </tr>
    );
};

export default SelectClassRow;