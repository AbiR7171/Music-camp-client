import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Routes/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { Navigate, useNavigate } from 'react-router-dom';

const AllClassesCard = ({clas}) => {

    const {user}= useContext(AuthContext)
    const navigate = useNavigate()

    const[axiosSecure]=useAxiosSecure()

  
   
    
    const disable = clas.seat == 0 ;



    
        const handleSelectd = ()=>{

            if(user){
                axiosSecure.post("/selected", {
                    clasName: clas.className, instructor: clas.name, price:clas.price, image:clas.image, classId: clas._id, userName: user?.displayName, email: user?.email, status:"selected", seat: clas.seat, enrolled: clas.totalEnrolled
                })
                .then(res =>{
                    if(res.data.insertedId){
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'class selected',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }

            else{
                Swal.fire({
                    title: 'You can not select without login',
                    text:"Do you want to",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate("/login")
                    }
                  })
            }

          
    
          
            
        
     }
    
       

  
    return (
        
       <div>
         <div className={`card w-96 bg-base-100 ${disable && "bg-red-500 text-white"} shadow-xl font-serif`}>
  <figure><img src={clas.image} className='h-52 w-full' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {clas.className}
      <div className="badge badge-secondary">${clas.price}</div>
    </h2>
    <p>instructor : {clas.name}</p> 
    <p>Available seats : {clas.seat}</p> 
    <div className="card-actions justify-start">
    <button disabled={disable} onClick={handleSelectd} className="btn btn-active btn-accent">Select</button>
    </div>
  </div>
</div>
       </div>
    );
};

export default AllClassesCard;