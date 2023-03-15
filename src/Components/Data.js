import React from 'react'

function Data() {
    return (
        <div className='w-fit border-2 border-white p-8 flex flex-col items-center rounded-xl font-raleway bg-gray-400'>
            <h1>Monday</h1>
            <i className="fa-solid fa-sun text-orange-500 text-3xl"></i>
            <p className='text-2xl'>Temp- <span>17°</span></p>
        </div>
    )
}

export default Data
