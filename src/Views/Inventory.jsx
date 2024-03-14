import { React, useEffect, useState } from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading';


import { addIngredient } from '../Assets/js/functions.js'
import { queryAi } from '../Assets/js/functions.js'

import WellItem from '../Components/WellItem.jsx'

const Inventory = (props) => {
    const [ingredients, setIngredients] = useState([]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const query = event.target.query.value;
        console.log(query);
        const response = await axios.post('http://127.0.0.1:8000/api/addIngredient/', { query: query });

        document.getElementById('itemInput').value = '';

        console.log('ingredient added')
        fetchIngredients()
    }

    const fetchIngredients = async (event) => {
        const response = await axios.get('http://127.0.0.1:8000/api/getIngredients/')
        setIngredients(response.data[0].ingredients);
    }

    const handleClick = async (event) => {
        document.getElementById('new_button').style.display = 'none';
        document.getElementById('loader').style.display = 'flex';
        await queryAi()
        window.location.href = '/drinks'

    }



    useEffect(() => {
        fetchIngredients();
    }, []);

    const listItems = ingredients.map((ingredient) =>
        <li><WellItem item={ingredient} fetchIngredients={fetchIngredients} /></li>
    );
    return (
        <div className=' flex flex-col items-center '>
            <div className='flex flex-col my-8'>
                <div className='text-3xl font-oswald'>Your Ingredient Inventory</div>
            </div>

            <div className='my-8 flex flex-col items-center'>


                <form onSubmit={handleSubmit} className='flex flex-row justify-between my-8'>

                    <input id='itemInput' type='text' className='border border-black p-2 rounded-md' name='query' />
                    <button type='submit' className='border border-black p-2 rounded-md'>Add Item</button>
                </form>
                <ul>{listItems}</ul>
                <button id='new_button' className="bg-gray-400 p-2 rounded-md my-8" onClick={handleClick}>Get New Drinks</button>
                <div id="loader" className='hidden flex-col items-center justify-center'>
                    <ReactLoading type={'bars'} color={'#000'} height={50} width={100} />
                    <div className='my-8'>Generating your drinks</div>
                </div>

            </div>
        </div>
    )
}

export default Inventory