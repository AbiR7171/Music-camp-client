import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
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