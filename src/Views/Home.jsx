import { React, useState, useEffect } from 'react'
import axios from 'axios'

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
        <div className='flex flex-col items-center '>

            <div className='flex flex-col my-8'>
                <div className='text-xl text-gray-600 font-oswald'>Good Eveneing,</div>
                <div className='text-3xl font-oswald'>Tonights Recomended Drink</div>
            </div>

            <div className='flex flex-row items-center my-8'>
                <div id={'feature' + '_card'} className="w-72 h-72 bg-[#003049] flex justify-center items-center m-4 relative  ">

                    <div class="w-64 h-64 absolute border-solid 
                border-white border-2">
                        <div class="drink-text absolute bottom-4 left-4 w-44 ">
                            <div class="drink-name text-white text-xl">
                                <div>Blue Captain Crush</div>
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    <div> 1.5 oz of Captain Morgan Long Island</div>

                    <div>0.5 oz of Blue Curacao</div>
                    <div>3 oz of Sweet and Sour Mix</div>
                    <div>1 oz of Water</div>
                </div>
            </div>

            <div className='text-3xl my-8'>Your Saved Drinks</div>
            <div className='grid grid-cols-3 gap-4 my-8'>
                {listItems}
            </div>

            {/* <div className='flex flex-row'>
                <Well onIngredientAdded={handleIngredientAdded} />
                <DrinkScreen key={refreshDrinkScreen} />
            </div> */}
        </div>

    )
}

export default Home