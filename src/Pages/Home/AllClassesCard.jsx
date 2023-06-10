import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Routes/AuthProvider';

const AllClassesCard = ({clas}) => {

    const {user}= useContext(AuthContext)

    const book = {clasName: clas.className, instructor: clas.name, price:clas.price, image:clas.image, classId: clas._id, userName: user.displayName, email: user.email, status:"selected"}
    
    const disable = clas.seats == 0 ;

    const handleSelectd = ()=>{
        fetch("http://localhost:5000/selected",
        {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(book)
        }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
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
    return (
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
    );
};

export default AllClassesCard;