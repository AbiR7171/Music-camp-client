import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
    const{user, loading}=useContext(AuthContext)
    const navigate = useNavigate()

    if(loading ){
        return <progress className="progress w-56"></progress>
    }
    if(user){
      return  children
    }
    else{
       return  navigate("/login")
    }
};

export default PrivateRoute;