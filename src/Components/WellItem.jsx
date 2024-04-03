import React from 'react'
import { HiOutlineXCircle } from "react-icons/hi";
import axios from 'axios'



const WellItem = (props) => {
    function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const handleClick = async (event) => {
        event.preventDefault();
        const query = props.item;
        console.log(query);
        const response = await axios.post('http://127.0.0.1:8000/api/removeIngredient/', { query: query });
        props.fetchIngredients()
    }

    return (
        <div className='flex flex-row justify-between items-center p-2 text-lg border-b-2 min-w-96 hover:bg-gray-100 '>
            <div className='text-start'>{Capitalize(props.item)}</div>
            <HiOutlineXCircle onClick={handleClick} size={24} className='hover:cursor-pointer hover:bg-red-400 hover:rounded-2xl' />
        </div>
    )
}

export default WellItem