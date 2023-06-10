import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Pages/Hooks/useAxiosSecure';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Routes/AuthProvider';

const CheckOut = ({book, clas}) => {


 

    const {price}= book;

    const stripe = useStripe()
    const element = useElements()
    const[axiosSecure]=useAxiosSecure()
    const {user}=useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState("");

    useEffect(()=>{


        axiosSecure.post("/create-payment-intent",{ price })
        .then(res =>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure, price])

    const handleSubmit = async(event)=>{

        event.preventDefault()

        if(!stripe || !element){
            return
        }

        const card = element.getElement(CardElement)

        if(card == null){
            return
        }

        const {error, paymentMethod}= await stripe.createPaymentMethod({
            type:"card",
            card
        });
      



          
        const{paymentIntent, error:confirmError}= await   stripe.confirmCardPayment(clientSecret, {
     payment_method: {
      card: card,
       billing_details: {
      name: user?.displayName || "unknow",
      email:user.email ||"unkonw"
    },
  },
})
;

   

if(error || confirmError){
  console.log(error);
  Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error?.message}`
    })
}
else{
  if(paymentIntent.status === "succeeded"){
            axiosSecure.patch(`/mySelected/${book._id}`,)
            .then(res =>{
              console.log(res.data);
              if(res.data.modifiedCount){
                Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: 'Class Booked',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
        
          axiosSecure.patch(`/classEnroll/${book.classId}`,{
            seat: clas.seat, totalEnrolled: clas.totalEnrolled
          })
          .then(res =>{
            console.log(res.data);
          })


  }
}

console.log(paymentIntent);

    }

   
    return (
        <div>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button disabled={!stripe || !clientSecret} type="submit" className='bg-green-600 py-1 px-5 rounded-lg text-white mt-2 shadow-lg'>
        Pay
      </button>
    </form>
        </div>
    );
};

export default CheckOut;