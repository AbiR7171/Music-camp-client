import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../../Routes/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useSeletedClass = () => {
    const {user, loading}=useContext(AuthContext)
    const[axiosSecure]=useAxiosSecure()

    const{refetch, data: selectClass=[]}= useQuery({
        queryKey:["class", user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure(`/mySelected?email=${user?.email}`)
            return res.data ;
        }

    })
    
     return [selectClass, refetch]
};

export default useSeletedClass;