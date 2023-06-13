import React from 'react';
import useSeletedClass from '../../Hooks/useSeletedClass';
import SelectClassRow from './SelectClassRow';
import { BsFillSendCheckFill } from "react-icons/bs";
import UseSectionHeader from '../../Hooks/useSectionHeader';

const SelectedClass = () => {

    const[selectClass, refetch]=useSeletedClass()
    console.log(selectClass);
    const selectedClass = selectClass.filter(s => s.status === "selected")
    return (
        <div>
          <UseSectionHeader title={"Your Selected Classes"}/>
            <div className='flex justify-end'>
            
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
        <th>Pay</th>
      </tr>
    </thead>
    <tbody>
      
      {selectedClass.map((clas,index) => <SelectClassRow refetch={refetch} index={index} clas={clas} key={clas._id} />)}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default SelectedClass;