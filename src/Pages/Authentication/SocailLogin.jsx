import React from 'react';
import { FcGoogle } from "react-icons/fc";

const SocailLogin = () => {
    return (
        <div className='font-serif'>
            <h2>You can also login with</h2>
            <div className='border-2 p-4 w-1/3 mb-3 bg-black bg-opacity-25'>
            <FcGoogle className='text-5xl ms-16'/>
            </div>
        </div>
    );
};

export default SocailLogin;