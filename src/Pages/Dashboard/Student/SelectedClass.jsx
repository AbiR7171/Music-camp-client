import React from 'react';
import useSeletedClass from '../../Hooks/useSeletedClass';
import SelectClassRow from './SelectClassRow';
import { BsFillSendCheckFill } from "react-icons/bs";

const SelectedClass = () => {

    const[selectClass, refetch]=useSeletedClass()
    console.log(selectClass);
    return (
        <div>
            <div className='flex justify-end'>
            <button className='text-2xl bg-ora flex items-center gap-2'><BsFillSendCheckFill/></button>
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-[900px]">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>class Name</th>
        <th>Image</th>
        <th>Instructor</th>
        <th>Price</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {selectClass.map((clas,index) => <SelectClassRow refetch={refetch} index={index} clas={clas} key={clas._id} />)}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default SelectedClass;