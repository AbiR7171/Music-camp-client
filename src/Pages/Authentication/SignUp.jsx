import React, { useState } from 'react';
import pic from "../../assets/Mobile-login-Cristina.jpg"
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const[error, setError]=useState("")

  const onSubmit = data =>{

    if(data.password != data.confirmPassword){
         return   setError("Password Dosen't Match")
    }
    else{
      setError("")
    }
   

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
                <input
                  {...register("password",{
                    
                    required:true,
                    minLength:6,
                    pattern:/(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/
                    
                  })}
                  name="password"
                  type="password"
                  className="mt-1 px-4 py-2 w-full bg-green-500 bg-opacity-20 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your password"
                />
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
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Submit
                </button>
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