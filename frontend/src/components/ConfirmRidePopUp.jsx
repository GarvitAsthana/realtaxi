import React, { useState } from "react";
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('')

    const submitHandler = (e)=> {
        e.preventDefault();
    }

    return (
        <div >
        <h5 className='p-1 text-center absolute top-0 w-[93%]' onClick={()=> {
               props.setRidePopUpPanel(false);
           }}><i className=' text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
           <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to start</h3>
           <div className="flex items-center justify-between mt-4 p-3 bg-yellow-300 rounded-lg">
               <div className="flex items-center gap-3 ">
                   <img className="h-12 rounded-full object-cover w-12" src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                   <h2 className="text-lg font-medium">Harsh Singh</h2>
               </div>
               <h5 className="text-lg font-semibold">2.2 KM</h5>
           </div>
           <div className='flex gap-2 justify-between flex-col items-center'>
           
           <div className='w-full mt-5'>
           <div className='flex items-center gap-5 p-3 border-b-2'>
           <i className='text-lg ri-map-pin-user-fill'></i>
           <div>
               <h3 className='text-lg font-medium'>562/11-A</h3>
               <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab , Ahmedabad</p>
           </div>
           </div>
           <div className='flex items-center gap-5 p-3 border-b-2'>
           <i className='text-lg ri-map-pin-2-fill'></i>
           <div>
               <h3 className='text-lg font-medium'>562/11-A</h3>
               <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab , Ahmedabad</p>
           </div>
           </div>
           <div className='flex items-center gap-5 p-3 '>
           <i className='text-lg ri-currency-line'></i>
           <div>
               <h3 className='text-lg font-medium'>Rs 193.20</h3>
               <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
           </div>
           </div>
           </div>
           
           <div className="mt-6 w-full" >
           <form onSubmit={(e) => {
            submitHandler(e)
           }}>

           <input value={otp} onChange={(e)=>setOtp(e.target.value)} className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3 ' type="text" placeholder="Enter OTP" />

           <Link to='/captain-riding' className='w-full mt-5 flex text-lg justify-center bg-green-600 text-white font-semibold rounded-lg p-3'>Confirm</Link>
            <button onClick={()=> {
               props.setConfirmRidePopUpPanel(false);
               props.setRidePopUpPanel(false)
           }} className='w-full mt-2 bg-red-600 text-lg text-white font-semibold rounded-lg p-3'>Cancel</button>
           </form>
           </div>
           </div>
   </div>
    )
}

export default ConfirmRidePopUp;