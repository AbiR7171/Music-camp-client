import React, { useRef, useState } from 'react';
import useAxiosSecure from '../Pages/Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Feedback = ({id}) => {

    console.log(id);

    

    const feedbackRef = useRef()
    const[axiosSecure]=useAxiosSecure()

    
    const handleFeedback = (e)=>{
      
        e.preventDefault();
      
       
        
        const feedback = feedbackRef.current.value;
        console.log(id);

       
        axiosSecure.put(`/deny/feedback`, {feedback: feedback, id:id})
        .then(res =>{
          console.log(res.data);
          if(res.data.modifiedCount >0 ){
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'feedback send',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
       
  
      }


    return (
        <div>
            {/* The button to open modal */}
<a href="#my_modal_8" className="btn btn-sm bg-orange-500">Send Feedback</a>
{/* Put this part before </body> tag */}
<div className="modal" id="my_modal_8">
  <form className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <input ref={feedbackRef} type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
    <button onClick={handleFeedback} className="btn btn-error">Send</button>
    <div className="modal-action">
     <a href="#" className="btn">close</a>
    </div>
  </form>
</div>
        </div>
    );
};

export default Feedback;