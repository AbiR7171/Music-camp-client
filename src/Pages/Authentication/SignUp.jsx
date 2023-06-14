import React, { useContext, useState } from 'react';
import pic from "../../assets/Mobile-login-Cristina.jpg"
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Routes/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useAxiosSecure from '../Hooks/useAxiosSecure';
import SocailLogin from './SocailLogin';


const SignUp = () => {

 
  const[axiosSecure]=useAxiosSecure()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const[error, setError]=useState("")
  const[show, setShow]=useState(false)

  const navigate = useNavigate()

  const{handlesignUp, handleUpdateProfile}=useContext(AuthContext)

  const onSubmit = data =>{

    if(data.password != data.confirmPassword){
         return   setError("Password Dosen't Match")
    }
    else{
      setError("")
    }
    console.log(data);
    
    handlesignUp(data.email, data.password)
    .then(result =>{
      const signUpUser = result.user;
      handleUpdateProfile(signUpUser,data.name, data.photoUrl)

      navigate('/')
      console.log(signUpUser);

   const user = {name: data.name, email: data.email, photo:data.photoUrl, role: "student"}

      
        axiosSecure.post("/users", {
          user
        })
        .then(res =>{
            if(res.data.insertedId){
              Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Sign Up successfully',
                showConfirmButton: false,
                timer: 1500
              })
            }
        })


        fetch("https://sports-camp-server-seven.vercel.app/users",{
          method:"POST",
          headers:{
            "content-type": "application/json",
            authorization :`Bearer ${localStorage.getItem("Music-access-token")}`
          },
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            console.log(data);
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Sign Up successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
         
        })

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
               <div className="flex justify-center">
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
          <div className="w-1/2 p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Name
                </label>
                <input
                 {...register("name")}
                  name="name"
                  type="text"
                  className="mt-1 px-4 py-2 w-full bg-green-500 bg-opacity-20 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-900"
                  placeholder="Enter your name"
                />
              </div>

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
                 {errors.email?.type === 'required' && <p className='text-red-700 font-serif mt-2'>Email is required</p>}
              </div>
 
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium">
                  Password
                </label>
                <div>
                <input
                  {...register("password",{
                    
                    required:true,
                    minLength:6,
                    pattern:/(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/
                    
                  })}
                  name="password"
                  type={`${show ? "text" : "password"}`}
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
                 {errors.password?.type === 'required' && <p className='text-red-700 font-serif mt-2'>Password is required</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-700 font-serif mt-2'>Password must be 6 letter</p>}
                {errors.password?.type === 'pattern' && <p className='text-red-700 font-serif mt-2'>Password must one capital letter and special character </p>}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-gray-700 font-medium">
                  Confirm Password
                </label>
                <input
                   {...register("confirmPassword",{required:true})}
                  name="confirmPassword"
                  type="password"
                  className="mt-1 px-4 py-2 w-full bg-green-500 bg-opacity-20 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Confirm your password"
                />
                {errors.password?.type === 'required' && <p className='text-red-700 font-serif mt-2'>Please Confirm your password</p>}
               <p className='text-red-700 font-serif mt-2'>{error}</p>
              </div>

              <div>
                <label htmlFor="photoUrl" className="block text-gray-700 font-medium">
                  Photo URL
                </label>
                <input
                 {...register("photoUrl")}
                  name="photoUrl"
                  type="text"
                  className="mt-1 px-4 py-2 w-full bg-green-500 bg-opacity-20 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter the photo URL"
                />
              </div>

              <div>
                <SocailLogin/>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Submit
                </button>
                <p className='mt-2 font-serif'>Already have an account ?<Link className='btn-link' to="/login">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default SignUp;