import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div>
           <h5 className='p-1 text-center absolute top-0 w-[93%]' onClick={()=> {
                    props.setConfirmRidePanel(false)
                }}><i className=' text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
                <h3 className='text-2xl font-semibold mb-5'>Confirm your ride</h3>

                <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s' />
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
                <button onClick={()=> {
                    props.setVehicleFound(true)
                    props.setConfirmRidePanel(false)
                }} className='w-full mt-5 bg-green-600 text-white font-semibold rounded-lg p-2'>Confirm</button>
                </div>

        </div>
    )
}

export default ConfirmRide;