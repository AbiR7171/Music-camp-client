import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useInstructor from '../Pages/Hooks/useInstructor';
import { AuthContext } from './AuthProvider';

const InstructorRoute = ({children}) => {
    const{user, loading}=useContext(AuthContext)
    const[isInstructor, isLoading]=useInstructor()
    const navigate = useNavigate()

    if(loading || isLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isInstructor){
      return  children
    }
    else{
       return  navigate("/login")
    }
};

export default InstructorRoute;