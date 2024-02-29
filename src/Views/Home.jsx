import React from 'react'

import Well from '../Components/Well'
import DrinkScreen from '../Components/DrinkScreen'

const Home = () => {
    return (
        <div className='flex flex-row'>
            <Well />
            <DrinkScreen />
        </div>
    )
}

export default Home