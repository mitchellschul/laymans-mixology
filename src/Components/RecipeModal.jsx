import { React, useState } from 'react'
import axios from 'axios';

const RecipeModal = (props) => {
    // console.log(props.ingredients)
    var ingredients = Object.entries(props.ingredients)
    const [checkedValue, setCheckedValue] = useState(false);


    var instructionsList = props.instructions.split('.').slice(0, -1)

    function handleClick() {
        document.getElementById(props.idName + "_recipe_modal").style.display = 'none'
    }

    function handleCheck() {
        setCheckedValue(!checkedValue)
        console.log(checkedValue)

        if (!checkedValue) {
            addSavedDrink() //
        } else {
            removeSavedDrink()
        }
    }

    const addSavedDrink = async (event) => {
        console.log('adding', props.drinkData)
        // event.preventDefault();
        const query = props.drinkData;
        console.log(query);
        const response = await axios.post('http://127.0.0.1:8000/api/addSavedDrink/', { query: query });

        // document.getElementById('itemInput').value = '';

        console.log('ingredient added')
        // fetchIngredients()
    }

    const removeSavedDrink = async (event) => {
        console.log('removing', props.drinkData)
        // event.preventDefault();
        // const query = event.target.query.value;
        // console.log(query);
        // const response = await axios.post('http://127.0.0.1:8000/api/addSavedDrink/', { query: query });

        // document.getElementById('itemInput').value = '';

        // console.log('ingredient added')
        // fetchIngredients()
    }



    const ingredientsHtml = ingredients.map((ingredient) =>

        <li>{ingredient[1] + ' of ' + ingredient[0]}</li>
    );
    const instructionsHtml = instructionsList.map((instruction) =>
        <li>{'-' + instruction}</li>
    );





    return (
        <div id={props.idName + "_recipe_modal"} tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden absolute  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            {props.name}
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={handleClick}>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>

                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div class="p-4 md:p-5 flex flex-row ">
                        <div className='w-40 h-40 bg-white'></div>
                        <ul className='ml-8 text-white'>{ingredientsHtml}</ul>
                        <ul className='ml-8 text-white w-40'>{instructionsHtml}</ul>
                    </div>

                    {/* modal footer  */}
                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">

                        <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Save Drink</button>
                        <input id="saved-checkbox" type='checkbox' onClick={handleCheck}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeModal