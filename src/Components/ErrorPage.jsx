import React from 'react';
import eror from "../assets/Animation/Error.json"
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
       <div className='text-end' >
         <div className='w-96 mx-auto'>
            <Lottie animationData={eror}   loop={true} />
        </div>
       <Link to="/"> <button className='btn btn-primary me-52'>Home</button></Link>
       </div>
    );
};

export default ErrorPage;