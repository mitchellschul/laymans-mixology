import React from 'react'

import Placeholder from '../Assets/Images/testimg.jpg'
import RecipeModal from './RecipeModal'

const DrinkCard = (props) => {
    const name = props.name
    const idName = name.toLowerCase().split(' ').join('_')

    function handleClick() {
        var modal = document.getElementById(idName + '_recipe_modal').style.display = 'flex'
        console.log('click', modal)
    }

    return (



        <div>
            <RecipeModal idName={idName} name={name} ingredients={props.ingredients} instructions={props.instructions} drinkData={props.drinkData} />

            <div id={idName + '_card'} className="w-60 h-60 bg-gray-600 flex justify-center items-center m-4 relative hover:cursor-pointer hover:scale-105" onClick={handleClick}>
                {/* <div className="w-[250px] h-[250px] absolute"></div> */}

                <div class="w-52 h-52 absolute border-solid 
                border-white border-2">

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