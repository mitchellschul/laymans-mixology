import { React, useState, useEffect } from 'react'
import axios from 'axios'

import Placeholder from '../Assets/Images/testimg.jpg'
import RecipeModal from './RecipeModal'


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

    // if (userIngredients.every(r => ingredients.includes(r))) {
    //     console.log('Found all of', userIngredients, 'in', ingredients);
    //     document.getElementById('make-tag').style.display = 'flex';
    // }

    return (



        <div>
            <RecipeModal idName={idName} name={name} ingredients={props.ingredients} instructions={props.instructions} drinkData={props.drinkData} saved={props.saved} buttonText={buttonText} fetchDrinks={props.fetchDrinks} />

            <div id={idName + '_card'} className="w-60 h-60 bg-[#003049] flex justify-center items-center m-4 relative hover:cursor-pointer hover:scale-105" onClick={handleClick}>
                {/* <div className="w-[250px] h-[250px] absolute"></div> */}

                <div class="w-52 h-52 absolute border-solid 
                border-white border-2">
                    <div id='make-tag' className='text-white absolute top-2 left-12 w-44 hidden'>You Can Make This</div>

                    <div class="drink-text absolute bottom-4 left-4 w-44 ">
                        <div class="drink-name text-white text-lg">
                            {props.name}
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default DrinkCard