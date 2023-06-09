import React from 'react';
import useManageClasses from '../Hooks/useManageClasses';
import AllClassesCard from './AllClassesCard';

const AllClasses = () => {

    const [classes]=useManageClasses()
    console.log(classes);

    const approveClasses = classes.filter(cla => cla.status === "approve" )
    console.log(approveClasses);


    

    return (
        <div>
           <div className='mt-10 mb-10 grid lg:grid-cols-3'>
           {approveClasses.map(clas => <AllClassesCard clas={clas} key={clas._id}/>)}
           </div>
        </div>
    );
};

export default AllClasses;