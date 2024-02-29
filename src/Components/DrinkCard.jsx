import React from 'react'
import Placeholder from '../Assets/Images/testimg.jpg'

const DrinkCard = (props) => {




    return (
        <div>
            <div className="w-[250px] h-[250px] flex justify-center m-4 relative">
                <div className="w-[250px] h-[250px] absolute"></div>

                <div class="w-[220px] h-[220px] absolute border-solid border-white border-2">
                </div>

                <div class="drink-text">
                    <div class="drink-name">
                        {props.name}
                    </div>


                </div>
            </div >
        </div>
    )
}

export default DrinkCard