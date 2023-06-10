import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect } from 'react';
import CheckOut from '../../../Components/CheckOut';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Pk)

const Payment = () => {

    const id = useParams()

    const[book, setbook]=useState({})
    const[clas, setClass]=useState({})
    console.log(book);


    useEffect(()=>{
        fetch(`http://localhost:5000/mySelected/${id.id}`)
        .then(res => res.json())
        .then(data => {
  
            data.map(d => {
                
                setbook(d)
               
            })
        })

        
    },[])

    useEffect(()=>{
        fetch(`http://localhost:5000/classes/${book.classId}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            data.map(c => {
                console.log(c);
                setClass(d)
            })
        })
    },[])

  
    return (
        <div className='w-[900px]'>
            <Elements stripe={stripePromise}>
                <CheckOut book={book} clas={clas}/>
            </Elements>
        </div>
    );
};

export default Payment;