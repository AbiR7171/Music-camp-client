import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import app from '../Firebase/firebase.confiq';



export const AuthContext = createContext()
const AuthProvider = ({children}) => {
     
    const [user, setUser]=useState(null)
    const[loading, setLoading]=useState(true)


    const auth = getAuth(app)

    const signUp =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleUpdateProfile=(photo, name)=>{

         updateProfile(auth.currentUser, {
           
            displayName:name, photoURL:photo
        })
        .then(()=>{ 
                  setLoading(false)
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
        })
        return ()=> unsubscribe()
    },[])
   
    const authInfo ={
        signUp,
        loading,
        user,
        logIn,
        handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;