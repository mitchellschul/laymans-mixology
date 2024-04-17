import React from 'react'
import { Link } from "react-router-dom";
import { FaGlassWhiskey } from "react-icons/fa";
const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='flex flex-row items-center text-7xl m-8'>
                4
                <FaGlassWhiskey />
                4

            </div>
            <h1 className='text-2xl'>No drinks to be had here</h1>
            <p>Here are some helpful links:</p>
            <div className='flex flex-row'>
                <Link to='/' className='m-2'>Home</Link>
                <Link to='/inventory' className='m-2'>Inventory</Link>
                <Link to='/drinks' className='m-2'>Drinks</Link>
            </div>
        </div>

    )
}

export default NotFound