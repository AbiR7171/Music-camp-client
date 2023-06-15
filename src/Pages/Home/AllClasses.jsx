import React, { useEffect, useState } from 'react';
import useManageClasses from '../Hooks/useManageClasses';
import AllClassesCard from './AllClassesCard';
import UseSectionHeader from '../Hooks/useSectionHeader';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';

const AllClasses = () => {

    const[approve,setApprove]=useState([])
    console.log(approve)



   
    useEffect(()=>{
        fetch("https://sports-camp-server-seven.vercel.app/allClass")
        .then(res => res.json())
        .then(data =>{
          const approve =   data.filter(d => d.status === "approve")
          setApprove(approve)
        })
    },[])
    

    return (
        <div className='mt-10'>
            <UseSectionHeader title="Our Classes" subTitle="Choose Your Best Class"/>
           <div className='mt-10 mb-10 grid lg:grid-cols-3'>
           {approve.map(clas => <AllClassesCard clas={clas} key={clas._id}/>)}
           </div>
        </div>
    );
};

export default AllClasses;