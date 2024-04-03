import { React, useState, useEffect } from 'react'
import axios from 'axios'
import Hero from '../Components/Hero'
import bg from '../Assets/Images/bg.png'


import DrinkCard from '../Components/DrinkCard'

const Home = (props) => {
    console.log("HOME USER INFO", props)

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
        <div className="flex flex-col items-center" >

            <Hero />
            <div className="w-full  mx-20 flex flex-col items-center" >

                <div className='text-3xl my-8'>Your Saved Drinks</div>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                    {listItems}
                </div>
            </div>
        </div >

    )
}

export default Home