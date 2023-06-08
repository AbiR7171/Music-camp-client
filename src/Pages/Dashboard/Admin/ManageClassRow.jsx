import React from 'react';
import Swal from 'sweetalert2';

const ManageClassRow = ({cla, index, refetch}) => {



    const handleDeny = ()=>{
        fetch(`http://localhost:5000/class/deny/${cla._id}`,{
            method:"PATCH"
         })
         .then(res => res.json())
         .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'class Deny',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
         })
    }


    const handleAprove =()=>{
         fetch(`http://localhost:5000/class/approve/${cla._id}`,{
            method:"PATCH"
         })
         .then(res => res.json())
         .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'class approve',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
         })
    }

    const handleFeedback = (event)=>{

        event.preventDefault()
      
        const feedback = event.target.feedback.value;
        const update = {feedback}
  
        fetch(`http://localhost:5000/class/${cla._id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount >0){
                event.target.reset()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Feedback send',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
  
      }
    return (
        <tr >
        <th>{index +1}</th>
        <td>{cla.className}</td>
        <td><img src={cla.image} className='w-16  rounded-lg hover:w-52  duration-150' /></td>
        <td className='text-start'>{cla.name}</td>
        <td className='text-center'>{cla.email}</td>
        <td>{cla.seats}</td>
        <td>{cla.price}</td>
        <td className='text-end'>{cla.status}</td>
        <td>
          <div className='flex space-x-2'>
          <button disabled={cla.status === "approve" || "deny"} onClick={handleAprove} className="btn btn-xs bg-orange-400">Approve</button>
          <button  onClick={handleDeny} disabled={cla.status === "approve" || cla.status === "deny"} className="btn btn-xs bg-orange-400">Deny</button>
          {/* Open the modal using ID.showModal() method */}
{/* Open the modal using ID.showModal() method */}
{/* The button to open modal */}
<label htmlFor="my_modal_7" className="btn btn-xs bg-orange-400"> Send feedback</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal">
  <form onSubmit={handleFeedback} className="modal-box">
    <h3 className="text-lg font-bold">Send FeedBack</h3>
    <textarea  name='feedback' placeholder="Write you " className="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
    <input  type="submit" className='block px-5 py-3  bg-green-800 text-white rounded-md hover:bg-green-600'/>
  </form>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
          </div>
        </td>
      </tr>
    );
};

export default ManageClassRow;