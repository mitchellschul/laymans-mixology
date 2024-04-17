import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { BiSolidDrink } from "react-icons/bi";


import DrinkCard from '../Components/DrinkCard'

const Drinks = () => {

    const [drinks, setDrinks] = useState([]);

    const fetchDrinks = async (event) => {
        const response = await axios.get('http://127.0.0.1:8000/api/getDrinks/')
        setDrinks(response.data[0].drinks.drinks);
    }

    useEffect(() => {
        fetchDrinks();
    }, []);

    const listItems = drinks.map((drink) =>
        <DrinkCard name={drink['name']} ingredients={drink['ingredients']} instructions={drink['instructions']} fetchDrinks={fetchDrinks} saved={false} drinkData={drink} />
    );
    return (
        <div className='flex flex-col items-center bg-bg-white'>

            <div className='flex flex-col my-8'>
                <div className='text-3xl font-oswald'>Your AI Customized Drinks</div>
            </div>


            {/* <button onClick={test}>Drinks</button> */}
            <div className='bg-dark-gray p-12 rounded-xl m-4'>
                <div className='flex flex-row items-center text-gray-400 text-lg my-4'>
                    <BiSolidDrink className='text-gray-400 mr-2 my-2 w-6 h-6' /> Drinks custom to your flavor profiles
                </div>
                <div className='grid grid-cols-1 gap-12 md:grid-cols-3'>
                    {listItems}
                </div>
            </div>

        </div>
    )
}

export default Drinks