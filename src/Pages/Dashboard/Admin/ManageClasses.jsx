import React, { useEffect, useRef, useState } from 'react';
import useManageClasses from '../../Hooks/useManageClasses';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ManageClassRow from './ManageClassRow';
import UseSectionHeader from '../../Hooks/useSectionHeader';

const ManageClasses = () => {

    const[classes, refetch]=useManageClasses()
    console.log(classes);
   

    
    return (
        <div>
          <UseSectionHeader title={"Manage Classes"}/>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-[1000px]">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>className</th>
        <th>Image</th>
        <th>Instructor</th>
        <th>Instructor Email</th>
        <th>Seats</th>
        <th>Price</th>
        <th>Status</th>
        <th className='text-center'>Action</th>
      </tr>
    </thead>
    <tbody>
    {classes.map((cla, index) => <ManageClassRow key={cla._id} refetch={refetch} cla={cla} index={index}/>)}
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageClasses;