import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../../Routes/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const  usePaymentHistory = () => {
    const {user, loading}=useContext(AuthContext)
    console.log(user);
    const[axiosSecure]=useAxiosSecure()

    const{refetch, data: payment=[]}= useQuery({
        queryKey:["class", user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure(`/payment?email=${user?.email}`)
            return res.data ;
        }

    })
    
     return [payment, refetch]
};

export default usePaymentHistory;