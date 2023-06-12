import React from 'react';
import useSeletedClass from '../../Hooks/useSeletedClass';

const EnrolledClass = () => {
    const[selectClass, refetch]=useSeletedClass()

    const enrolled = selectClass.filter(s => s.status === "booked")
    console.log(enrolled);
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-[900px]">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class Name</th>
        <th>Image</th>
        <th>Instructor</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {enrolled.map((enroll,index) =>   <tr key={enroll._id} > 
        <th>{index + 1}</th>
        <td>{enroll.clasName}</td>
        <td><img src={enroll.image} className='w-14 h-12 rounded-lg hover:w-52 hover:h-52 duration-200' alt="" /></td>
        <td>{enroll.instructor}</td>
        <td>{enroll.price}</td>
      </tr> )}
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default EnrolledClass;