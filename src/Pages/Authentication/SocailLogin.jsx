import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Routes/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SocailLogin = () => {
    const{handleGoogleLogin}=useContext(AuthContext)
  
    const[axiosSecure]=useAxiosSecure()
    const navigate = useNavigate()

     
   const googleLogin=()=>{
    handleGoogleLogin()
  .then(result =>{
    const loggedUser = result.user
    console.log(loggedUser);
    navigate("/")
    
    axiosSecure.post("/users", {
        email: loggedUser.email, name:loggedUser.displayName, photo:loggedUser.photoURL, role:"student"
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

  })
.catch(error =>{
    console.log(error.message);
  })
   }
    
   
    return (
        <div className='font-serif'>
            <h2>You can also login with</h2>
            <div onClick={googleLogin} className='border-2 p-4 w-1/3 mb-3 bg-black bg-opacity-25'>
            <FcGoogle className='text-5xl ms-16'/>
            </div>
        </div>
    );
};

export default SocailLogin;