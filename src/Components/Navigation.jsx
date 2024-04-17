import { React, useState } from 'react'
import { Outlet, NavLink } from "react-router-dom";

import Logo from '../Assets/Images/Cover.png';

const Navigation = () => {

    return (
        <>
            <div className='flex flex-row justify-between items-center px-8 w-full h-[80px] bg-[#242524]'>
                <div className='text-white text-xl w-52'>
                    <NavLink to="/"><img src={Logo} ></img></NavLink>
                </div>
                <div className='flex flex-row'>
                    <div className=' mx-2 text-lg'>
                        <NavLink to="/" style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f'

                        })}>Home</NavLink>
                    </div>
                    <div className=' mx-2 text-lg '>
                        <NavLink to="/inventory" style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f'

                        })}>Inventory</NavLink>
                    </div>
                    <div className=' mx-2 text-lg'>
                        <NavLink to="/Drinks" style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f',
                        })}>Drinks</NavLink>
                    </div>
                    {/* <div className='text-white mx-2 text-lg'>
                        <NavLink to="/Drinks" style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f'

                        })}>Log Out</NavLink>
                    </div> */}
                </div>

            </div>
            <Outlet />
        </>
    )
}

export default Navigation