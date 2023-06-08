import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {

    const[axiosSecure]=useAxiosSecure()
   

    const {isLoading, error,refetch, data:users=[]}= useQuery({
        queryKey:["user"],
        queryFn: async()=>{
              const res = await axiosSecure("/users")
              return res.data
        }
    })

    return[users, refetch]
};

export default useUsers;