import { React, useEffect, useState } from 'react'
import axios from 'axios'


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
        <DrinkCard name={drink['name']} ingredients={drink['ingredients']} instructions={drink['instructions']} drinkData={drink} fetchDrinks={fetchDrinks} />
    );
    return (
        <div className='flex flex-col items-center'>

            <div className='flex flex-col my-8'>
                <div className='text-3xl font-oswald'>Your AI Customized Drinks</div>
            </div>


            {/* <button onClick={test}>Drinks</button> */}

            <div className='grid grid-cols-4 gap-4'>
                {listItems}
            </div>

        </div>
    )
}

export default Drinks