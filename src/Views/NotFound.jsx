import React from 'react'
import { Link } from "react-router-dom";
import { FaGlassWhiskey } from "react-icons/fa";
const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-row items-center text-8xl'>
                4
                <FaGlassWhiskey />
                4

            </div>
            <h1 className='text-2xl'>No drinks to be had here</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
            <Link to='/inventory'>Inventory</Link>
            <Link to='/drinks'>Drinks</Link>
        </div>

    )
}

export default NotFound