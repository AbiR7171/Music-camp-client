import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../../Routes/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    
    const {user, loading}=useContext(AuthContext)
   const[axiosSecure]=useAxiosSecure();
  
   const {data:isInstructor, isLoading}= useQuery({

    queryKey:["isInstructor", user?.email],
    enabled:!loading,
    queryFn:async()=>{
        const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
        return res.data.instructor
    }
   })
   return[isInstructor, isLoading]
};

export default useInstructor;