import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useUsers from '../Hooks/useUsers';
import UseSectionHeader from '../Hooks/useSectionHeader';

const AllInstructor = () => {

     const[users]=useUsers()
     
     const instructors = users.filter(u => u.role === "instructor")
     console.log(instructors);

    return (
      <div>

        <UseSectionHeader title={"Our Instructor"} subTitle={"Choose Your Best One"}/>
          <div className='grid lg:grid-cols-3 gap-3 mt-10 mb-10'>
          
          {instructors.map(instructor => <div className="card w-96 bg-base-100 shadow-xl font-serif">
<figure><img src={instructor.photo} /></figure>
<div className="card-body">
  <h2 className="card-title">
    {instructor.name}
    <div className="badge badge-secondary">Instructor</div>
  </h2>
  <p>The instructor is responsible for increasing student learning through the following actions: Develop a relevant and progressive curriculum. Design and implement effective learning strategies and environments. Deliver instruction of high quality.</p>
  <p className='font-semibold'>Email : <span className='font-normal'>{instructor.email}</span> </p>
  <div className="card-actions justify-start">
    <div className="badge badge-outline btn-primary">Favorite</div>
  </div>
</div>
</div>)}
      </div>
      </div>
    );
};

export default AllInstructor;