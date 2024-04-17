import { React, useState, useEffect } from 'react'
import axios from 'axios'
import Hero from '../Components/Hero'
import bg from '../Assets/Images/bg.png'
import { BiSolidDrink } from "react-icons/bi";

import DrinkCard from '../Components/DrinkCard'

const Home = (props) => {

    const [drinks, setDrinks] = useState([]);
    const [featuredDrink, setFeaturedDrink] = useState(null);

    const fetchDrinks = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/getSavedDrinks/');
            const savedDrinks = response.data[0].drinks.savedDrinks;
            setDrinks(savedDrinks);
            const storedFeaturedDrinkIndex = localStorage.getItem('featuredDrinkIndex');
            if (storedFeaturedDrinkIndex) {
                const index = parseInt(storedFeaturedDrinkIndex);
                setFeaturedDrink(savedDrinks[index] || null);
            } else {
                setFeaturedDrink(savedDrinks[0] || null);
            }
        } catch (error) {
            console.error('Error fetching drinks:', error);
        }
    };
    useEffect(() => {
        fetchDrinks();
    }, []);

    const listItems = drinks.map((drink) =>
        <DrinkCard drinkData={drink} name={drink['name']} ingredients={drink['ingredients']} instructions={drink['instructions']} fetchDrinks={fetchDrinks} saved={true} />
    );

    useEffect(() => {
        if (featuredDrink) {
            localStorage.setItem('featuredDrinkIndex', drinks.indexOf(featuredDrink));
        }
    }, [featuredDrink, drinks]);

    // console.log(featuredDrinkName)
    return (
        <div className="flex flex-col items-center bg-bg-white" >

            <Hero />
            <div className=" mx-20 flex flex-col items-center relative bottom-60" >

                <div className='text-lg md:text-2xl my-8  border border-bg-white py-2 px-4 md:py-4 md:px-8 rounded-md text-bg-white font-display'>Your Favorites</div>
                <div className='flex flex-col justify-start'>
                    <div className='flex flex-row items-center text-gray-400 text-lg my-4'>
                        <BiSolidDrink className='text-gray-400 mr-2 my-2 w-6 h-6' /> Drinks custom to your flavor profiles
                    </div>
                    <div className='grid grid-cols-1 gap-16 md:grid-cols-3'>
                        {listItems}
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Home