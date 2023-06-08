import React from 'react';
import useClasses from '../../Hooks/useClasses';
import { GrUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';
import UpdateClass from './UpdateClass';

const MyClasses = () => {
    const[classes]=useClasses()
    console.log(classes);
    return (
        <div>
           <div className="overflow-x-auto w-[900px]">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Available seats</th>
        <th>Enrolled </th>
        <th>Price</th>
        <th>status</th>
        <th></th>
       
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
     {classes.map((cla, index) => <tr key={cla._id}>
        <th>{index +1}</th>
        <td>{cla.className}</td>
        <td className='text-start'>{cla.seats}</td>
        <td className='text-center'>{cla.totalEnrolled}</td>
        <td>{cla.price}</td>
        <td>{cla.status}</td>
        <td className='text-end'></td>
        <td className='text-end'><Link to={`/dashboard/instructor/updateClass/${cla._id}`}><GrUpdate/></Link></td>
      </tr>)}
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyClasses;