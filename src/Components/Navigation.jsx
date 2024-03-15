import { React, useState } from 'react'
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {

    return (
        <>
            <div className='flex flex-row justify-between items-center px-8 w-full h-[80px] bg-[#003049]'>
                <div className='text-white text-xl'>
                    <Link to="/">Layman's Mixology</Link>
                </div>
                <div className='flex flex-row'>
                    <div className='text-white text-lg'>
                        <Link to="/">Home</Link>
                    </div>
                    <div className='text-white mx-4 text-lg'>
                        <Link to="/inventory">Inventory</Link>
                    </div>
                    <div className='text-white text-lg'>
                        <Link to="/Drinks">Drinks</Link>
                    </div>
                </div>

            </div>
            <Outlet />
        </>
    )
}

export default Navigation