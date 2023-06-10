import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import useAdmin from '../Pages/Hooks/useAdmin';
import { useNavigate } from 'react-router-dom';

const AdminRoute = ({children}) => {

    const{user, loading}=useContext(AuthContext)
    const[isAdmin, isLoading]=useAdmin()
    const navigate = useNavigate()

    if(loading || isLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
      return  children
    }
    else{
       return  navigate("/login")
    }
   
};

export default AdminRoute;