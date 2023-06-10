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


    useEffect(()=>{
        fetch(`http://localhost:5000/myBooking/${id.id}`)
        .then(res => res.json())
        .then(data => {
  
            data.map(d => {
                
                setbook(d)
               
            })
        })
    },[])

  
    return (
        <div className='w-[900px]'>
            <Elements stripe={stripePromise}>
                <CheckOut book={book}/>
            </Elements>
        </div>
    );
};

export default Payment;