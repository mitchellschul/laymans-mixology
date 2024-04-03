import { React, useState, useEffect } from 'react'
import axios from 'axios'

import Placeholder from '../Assets/Images/testimg.jpg'
import RecipeModal from './RecipeModal'
import { BiSolidDrink } from "react-icons/bi";


const DrinkCard = (props) => {
    const [ingredients, setIngredients] = useState([]);
    const [userIngredients, setUserIngredients] = useState([]);
    const name = props.name
    const idName = name.toLowerCase().split(' ').join('_')


    const setSavedInfo = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/getIngredients/')
        setIngredients(response.data[0].ingredients);
        setUserIngredients(Object.keys(props.ingredients))
    }

    useEffect(() => {
        setSavedInfo();
    }, []);

    function handleClick() {
        var modal = document.getElementById(idName + '_recipe_modal').style.display = 'flex'
        console.log('click', modal)
    }

    var buttonText = function () {
        if (props.saved) {
            return 'Remove Saved Drink';
        } else {
            return 'Save Drink';
        }
    }

    var formatName = function () {
        if ((props.name).substring(0, 3) == 'CF ') {
            return (<div id="drink-name" class="drink-nam text-lg">
                {(props.name).substring(3)}
            </div>);
        } else {
            return (<div id="drink-name" class="drink-name text-white text-lg">
                {props.name}
            </div>);
        }
    }

    var madeForYou = function () {
        if ((props.name).substring(0, 3) == 'CF ') {
            return (<div className=" text-white text-lg absolute top-4 right-4">
                <BiSolidDrink className='w-6 h-6' />
            </div>);
        }
    }


    return (



        <div>
            <RecipeModal idName={idName} name={name} ingredients={props.ingredients} instructions={props.instructions} drinkData={props.drinkData} saved={props.saved} buttonText={buttonText} fetchDrinks={props.fetchDrinks} />

            <div id={idName + '_card'} className="w-60 h-60 bg-[#003049] flex justify-center items-center m-4 relative hover:cursor-pointer hover:scale-105" onClick={handleClick}>
                <div class="w-52 h-52 absolute border-solid 
                border-white border-2">
                    {madeForYou()}

                    <div class="drink-text absolute bottom-4 left-4 w-44 ">
                        <div id="drink-name" class="drink-name text-white text-lg">
                            {formatName()}
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default DrinkCard