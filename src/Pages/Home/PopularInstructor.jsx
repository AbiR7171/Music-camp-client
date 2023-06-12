import React from 'react';
import useUsers from '../Hooks/useUsers';
import UseSectionHeader from '../Hooks/useSectionHeader';

const PopularInstructor = () => {

    const[users]=useUsers()
    console.log(users);

    const instructor = users.filter(u => u.role === "instructor")
    console.log(instructor);
    return (
       <div>
        <UseSectionHeader title="Popular Instructor" subTitle="Here is Some of our Best Instructor"/>
         <div className='grid lg:grid-cols-3 gap-3 mt-10 mb-10'>
            {instructor.map(ins =><div className="card w-96 glass font-serif">
  <figure><img src={ins.photo} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{ins.name}</h2>
    <p>Email : {ins.email}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">Visit Profile</button>
    </div>
  </div>
</div>)}
        </div>
       </div>
    );
};

export default PopularInstructor;