import React from 'react'

import DrinkCard from '../Components/DrinkCard'

const Drinks = () => {
    return (
        <div>

            <header>
                <h1 className='recommendations-title'>Your Recommended Drinks</h1>
            </header>


            {/* <button onClick={test}>Drinks</button> */}

            <div class="container">

                <DrinkCard img="eeeeee" rating="5" name="Hello">
                </DrinkCard>


            </div>

        </div>
    )
}

export default Drinks