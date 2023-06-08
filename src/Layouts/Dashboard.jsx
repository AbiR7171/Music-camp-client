import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useUsers from '../Pages/Hooks/useUsers';
import { SiGoogleclassroom } from "react-icons/si";
import { FaUsers,FaHome, FaBook } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { BiSelectMultiple, BiBookAdd } from "react-icons/bi";


const Dashboard = () => {
     const[users]=useUsers()
     
     const admin = false;
     const student = false;
     const instructor = true;

    const dashboardItem = <>
    
    {admin && 
    <>
     <li><Link to="/dashboard/admin/manageClasses"><SiGoogleclassroom/>Manage Classes</Link></li>
     <li><Link to="/dashboard/admin/manageUsers"><FaUsers/>Manage users</Link></li>
    </>
    }
    {
      student && <> 
      <li><Link to="/dashboard/student/selectedClass"><TbHandClick/> My Selected classes</Link></li>
      <li><Link to="/dashboard/student/enrolledClass"><BiSelectMultiple/> My Enrolled classes</Link></li>

      </>
    }

    {
      instructor && <>
         
         <li><Link to="/dashboard/instructor/addAClass"><BiBookAdd/> Add a class</Link></li>
         <li><Link to="/dashboard/instructor/myClasses"><FaBook/> My classes</Link></li>


      </>
    }

    </>
    
    return (
      <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */} <Outlet/>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 h-full bg-yellow-600 font-a text-black space-y-2  font-serif uppercase">
          {/* Sidebar content here */}

          <p className='text-4xl font-serif mb-5 mt-5'>Music Camp</p>
         
          {dashboardItem}
          <div className='divider'></div>
           <li><Link to="/"><FaHome/>Home</Link></li>
          <li><Link></Link></li>
        </ul>
      
      </div>
    </div>
    );
};

export default Dashboard;