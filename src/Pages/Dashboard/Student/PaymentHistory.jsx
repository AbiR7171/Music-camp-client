import React from 'react';
import useSeletedClass from '../../Hooks/useSeletedClass';
import SelectClassRow from './SelectClassRow';
import { BsFillSendCheckFill } from "react-icons/bs";
import UseSectionHeader from '../../Hooks/useSectionHeader';
import usePaymentHistory from '../../Hooks/usePaymentHistory';

const PaymentHistory = () => {

    const [payment]=usePaymentHistory()
    console.log(payment);
  
    return (
        <div>
          <UseSectionHeader title={"Payment History"}/>
            <div className='flex justify-end'>
            
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-[900px]">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Email</th>
        <th>price</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      
     {
        payment.map((pay,index) =>  <tr>
            <th>{index + 1}</th>
            <th>{pay.email}</th>
            <th>{pay.price}</th>
            <th>{pay.date}</th>
            <th>{pay.status}</th>
          </tr> )
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;