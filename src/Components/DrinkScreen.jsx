import { React, useEffect, useState } from 'react'
import axios from 'axios'
import DrinkCard from './DrinkCard'



const DrinkScreen = () => {

    const [drinks, setDrinks] = useState([]);

    const fetchDrinks = async (event) => {
        const response = await axios.get('http://127.0.0.1:8000/api/getDrinks/')
        console.log("Drinks", response.data[0].drinks.drinks)
        setDrinks(response.data[0].drinks.drinks);
    }

    useEffect(() => {
        fetchDrinks();
    }, []);

    const listItems = drinks.map((drink) =>
        <DrinkCard name={drink['name']} />
    );

    return (
        <div className='w-full h-screen bg-slate-400'>
            DrinkScreen
            <div className='flex flex-col'>
                {listItems}
            </div>

        </div>
    )
}

export default DrinkScreen