import { React, useState, useEffect } from 'react'
import axios from 'axios'

import Placeholder from '../Assets/Images/testimg.jpg'
import RecipeModal from './RecipeModal'
import { BiSolidDrink } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

import drink1 from '../Assets/Images/1.jpg'
import drink3 from '../Assets/Images/3.jpg'


const DrinkCard = (props) => {
    const [ingredients, setIngredients] = useState([]);
    const [userIngredients, setUserIngredients] = useState([]);
    const [drinkImgSrc, setDrinkImgSrc] = useState('');
    const name = props.name
    const idName = name.toLowerCase().split(' ').join('_')


    // const setSavedInfo = async () => {
    //     const response = await axios.get('http://127.0.0.1:8000/api/getIngredients/')
    //     setIngredients(response.data[0].ingredients);
    //     setUserIngredients(Object.keys(props.ingredients))
    // }

    useEffect(() => {
        // setSavedInfo();
        setIngredients(props.ingredients)
        setDrinkImgSrc(drinkImgs[Math.floor(Math.random() * 2)])
    }, []);

    const drinkImgs = [drink1, drink3]

    function handleClick() {
        var modal = document.getElementById(idName + '_recipe_modal').style.display = 'flex'
        console.log('click', modal)
    }

    var buttonText = function () {
        if (props.saved) {
            return 'Remove From Favorites';
        } else {
            return 'Favorite Drink';
        }
    }

    var formatName = function () {
        if ((props.name).substring(0, 3) == 'CF ') {
            return (<div id="drink-name" class="drink-nam text-lg font-display">
                {(props.name).substring(3)}
            </div>);
        } else {
            return (<div id="drink-name" class="drink-name text-black text-lg font-display">
                {props.name}
            </div>);
        }
    }

    var madeForYou = function () {
        if ((props.name).substring(0, 3) == 'CF ') {
            return (<div className=" text-black text-xl absolute top-4 right-4">
                <BiSolidDrink className='w-6 h-6' />
            </div>);
        }
    }

    var ingredientsHtml = function () {
        console.log(Object.keys(ingredients));
        var str = "• ";
        ((Object.keys(ingredients)).forEach(element => {
            str += element + " • "
            console.log(element);
        }))
        return (<div className='font-thin'>{str}</div>);
    }



    return (



        <div>
            <RecipeModal idName={idName} name={name} ingredients={props.ingredients} instructions={props.instructions} drinkData={props.drinkData} saved={props.saved} img={drinkImgSrc} buttonText={buttonText} fetchDrinks={props.fetchDrinks} className="relative" />

            {/* <div id={idName + '_card'} className="w-60 h-60 bg-[#003049] flex justify-center items-center m-4 relative hover:cursor-pointer hover:scale-105" onClick={handleClick}>
                <img src={drinkImgSrc} className="" alt="" />
                <div class="w-52 h-52 absolute border-solid 
                border-white border-2">
                    {madeForYou()}

                    <div class="drink-text absolute bottom-4 left-4 w-44 ">
                        <div id="drink-name" class="drink-name text-white text-lg">
                            {formatName()}
                        </div>

                    </div>
                </div>


            </div> */}

            <div id={idName + '_card'} className="flex flex-col bg-bg-white drop-shadow-md font-display">
                <div className="w-60 h-60  rounded-lg ">
                    {madeForYou()}
                    <img src={drinkImgs[Math.floor(Math.random() * 2)]} className="rounded" alt="" />
                </div>
                <div className='p-2 max-w-60'>
                    <div id="drink-name" class="drink-name text-black text-xl font-bold">
                        {formatName()}
                    </div>


                    {ingredientsHtml()}


                    <div>
                        <button className='text-black rounded-lg flex flex-row items-center hover:text-gray-600' onClick={handleClick} >Recipe <FaArrowRight /> </button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default DrinkCard