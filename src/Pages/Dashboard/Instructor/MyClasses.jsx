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
       
        <th className='text-end'>Update</th>
      </tr>
    </thead>
    <tbody>
     {classes.map((cla, index) => <tr key={cla._id}>
        <td>{index +1}</td>
        <td>{cla.className}</td>
        <td className='text-start'>{cla.seat}</td>
        <td className='text-center'>{cla.totalEnrolled}</td>
        <td>{cla.price}</td>
        <td>{cla.status}</td>
        <td><div>
          {/* The button to open modal */}
<label disabled={cla.status === "approve" || cla.status === "pending"} htmlFor="my_modal_7" className={`btn btn-xs bg-orange-400 ${cla.status === "approve" && "hidden"} ${cla.status === "pending" && "hidden"}`}>See feedback</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Feed Back!</h3>
    <p  className="py-4">{cla?.feedback}</p>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
          </div></td>
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