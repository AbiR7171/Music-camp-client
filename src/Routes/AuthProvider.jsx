import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import app from '../Firebase/firebase.confiq';
import useAxiosSecure from '../Pages/Hooks/useAxiosSecure';
import axios from 'axios';



export const AuthContext = createContext()
const AuthProvider = ({children}) => {
     
    const [user, setUser]=useState(null)
    const[loading, setLoading]=useState(true)
    


    const auth = getAuth(app)

    const handlesignUp =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handlelogIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleUpdateProfile=(user,name, photo)=>{

        return updateProfile( user, {
           
            displayName:name, photoURL:photo
        })
        .then(()=>{ 
                  setLoading(false)
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleLogOut =()=>{
        return signOut(auth)
        .then(()=>{

        })
        .catch(error =>{
            console.log(error);
        })
        

    }

    useEffect(()=>{
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
                setUser(currentUser)
                setLoading(false)
                if(currentUser){
                    axios.post("http://localhost:5000/jwt", {
                        email: currentUser.email
                    })
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("Music-access-token", data.data.token)
                    })
                }
                else{
                    localStorage.removeItem("Music-access-token")
                }
                

        })
        return ()=> unsubscribe()
    },[])
   
    const authInfo ={
        handlesignUp,
        loading,
        user,
        handlelogIn,
        handleUpdateProfile,
        handleLogOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;