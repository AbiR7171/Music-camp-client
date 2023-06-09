import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../../Routes/AuthProvider';

const useManageClasses = () => {

    const{user, loading}=useContext(AuthContext)
    const[axiosSecure]=useAxiosSecure()
   

    const {data:classes=[], refetch}=useQuery({
        queryKey:["classes"],
        enabled:!loading,
        queryFn:async()=> {
          const res = await   axiosSecure("/classes")
            return res.data
        }
    })
    return[classes, refetch]
};

export default useManageClasses;