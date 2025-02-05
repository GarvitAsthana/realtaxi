import React from "react";

const RidePopUp = (props) => {
    return (
        <div>
             <h5 className='p-1 text-center absolute top-0 w-[93%]' onClick={()=> {
                    props.setRidePopUpPanel(false);
                }}><i className=' text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
                <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>
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
                <div className="flex w-full items-center justify-between mt-5">
                <button onClick={()=> {
                    props.setRidePopUpPanel(false);

                }} className='  bg-gray-300 text-gray-700 font-semibold rounded-lg p-3 px-10'>Ignore</button>
                <button onClick={()=> {
                    props.setConfirmRidePopUpPanel(true);
                }} className=' bg-green-600 text-white font-semibold rounded-lg p-3 px-10'>Accept</button>
                 
                </div>
                </div>
        </div>
    )
}

export default RidePopUp;