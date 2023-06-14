import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../Firebase/firebase.confiq';
import useAxiosSecure from '../Pages/Hooks/useAxiosSecure';
import axios from 'axios';
import { Result } from 'postcss';



export const AuthContext = createContext()
const AuthProvider = ({children}) => {
     
    const [user, setUser]=useState(null)
    const[loading, setLoading]=useState(true)

    const googleProvider = new GoogleAuthProvider();
    
    const handleGoogleLogin =()=>{
        return signInWithPopup(auth,googleProvider)
    }


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
                    axios.post("https://sports-camp-server-seven.vercel.app/jwt", {
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
        handleLogOut,
        handleGoogleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;