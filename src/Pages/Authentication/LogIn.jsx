import React, { useContext, useState } from 'react';
import pic from "../../assets/Mobile-login-Cristina.jpg"
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Routes/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SocailLogin from './SocailLogin';


const LogIn = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
 

  const navigate = useNavigate()
  const[show, setShow]=useState(false)

  const{handlelogIn}=useContext(AuthContext)

  const onSubmit = data =>{

   
    console.log(data);
    handlelogIn(data.email, data.password)
    .then(result =>{
        console.log(result.user);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Login successfully',
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/")
    })
    .catch(error =>{
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`
        })
    })
    

  } 

    return (
        <div>
               <div className="flex justify-center ">
      <div className="w-full  bg-white rounded-lg shadow-lg">
        <div className="flex">
          {/* Left Column */}
          <div className="w-1/2 p-6">
            <img
              src={pic}
              alt="Form Image"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Column */}
          <div className="w-1/2 p-6 mt-40">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
             
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <input
                 {...register("email",{required:true})}
                  name="email"
                  type="email"
                  className="mt-1 px-4 py-2 w-full bg-green-500 bg-opacity-20 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your email"
                />
              </div>
 
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium">
                  Password
                </label>
                <input
                  {...register("password")}
                  name="password"
                  type={`${show ? "text": "password"}`}
                  className="mt-1 px-4 py-2 w-full bg-green-500 bg-opacity-20 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your password"
                />
                 <p className='absolute end-0 me-9 -mt-8 text-2xl'>
                  
                 {
                  show ? <AiFillEyeInvisible onClick={()=> setShow(false)}/> :
                  <AiFillEye onClick={()=>setShow(true)}/>
                 }
                  
                  </p>
              </div>

              <div> 
                
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Submit
                </button>
                <p className='mt-2 font-serif'>New At Music-camp ?<Link className='btn-link' to="/signup">signUp</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default LogIn;