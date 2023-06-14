import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Routes/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


  const axiosSecure = axios.create({
    baseURL: "https://sports-camp-server-seven.vercel.app"
  })

const useAxiosSecure = () => {
   

    const { handleLogOut}= useContext(AuthContext)
    const navigate = useNavigate()


    useEffect(()=>{
        axiosSecure.interceptors.request.use((config)=>{
            const token = localStorage.getItem("Music-access-token");
            
            if(token){
                config.headers.authorization = `Bearer ${token}`
            }
            return config;

        })

        axiosSecure.interceptors.response.use(
            (response)=> response,
            async(error)=>{
                if(error.response && (error.response.status === 401 || error.response.status === 403)){
                    await handleLogOut();
                    navigate("/login")
                }
                return Promise.reject(error);
            }
        );
    },[handleLogOut, navigate]);

    return[axiosSecure]
};

export default useAxiosSecure;