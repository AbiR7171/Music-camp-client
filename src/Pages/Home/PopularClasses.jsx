import React, { useEffect, useState } from 'react';
import UseSectionHeader from '../Hooks/useSectionHeader';

const PopularClasses = () => {


    const[popular, setPopular]=useState([])
    console.log(popular);

    
   useEffect(()=>{
    fetch("https://sports-camp-server-seven.vercel.app/classes")
    .then(res => res.json())
    .then(data =>{
        console.log(data);
       const approve = data.filter(c => c.status === "approve")
       setPopular(approve)
    })
   },[])
    return (
       <div className='mt-10 mb-10'>
        <UseSectionHeader title="Popular Classes" subTitle="Here is some of our Popular Class"/>
         <div className='grid lg:grid-cols-2 gap-3 mt-10'>
            {popular.slice(0,6).map(pop => <div className="card card-side bg-orange-500 shadow-xl font-serif">
  <figure><img src={pop.image} className='h-72 w-72 flex-1'/></figure>
  <div className="card-body flex-1">
    <h2 className="card-title">{pop.className}</h2>
    <p>Instructor: <span>{pop.name}</span></p>
    <p>Join our vibrant music class where creativity takes center stage! Discover the joy of expressing yourself through melodies and rhythms. </p>
    <p className='font-bold'> Price:{pop.price} </p>
  </div>
</div>)}
        </div>
       </div>
    );
};

export default PopularClasses;