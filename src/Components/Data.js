import React from 'react'
import { floor } from '../Weather-Helper-Function/Helper'

function Data(props) {
    return (
        <div className='w-fit border-2 border-white p-8 flex flex-col items-center rounded-xl font-raleway bg-gray-400'>
            <h1>Monday</h1>
            <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="icon" />
            <p className='text-2xl'>{floor(props.temp)}</p>
            <p>{props.desc}</p>
        </div>
    )
}

export default Data
