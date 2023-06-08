import React, { useContext } from 'react';
import { AuthContext } from '../../Routes/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useClasses = () => {
    

    const {user, loading}=useContext(AuthContext)
    const[axiosSecure]=useAxiosSecure()

    const{refetch, data: classes=[]}= useQuery({
        queryKey:["class", user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure(`/myClasses?email=${user?.email}`)
            return res.data ;
        }

    })
    
     return [classes, refetch]
};

export default useClasses;