import { React, useEffect, useState } from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading';


import { addIngredient } from '../Assets/js/functions.js'
import { queryAi, queryFPAi } from '../Assets/js/functions.js'

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
        document.getElementById('new_button').style.display = 'flex';
        document.getElementById('loader').style.display = 'none';

    }

    const flavorClick = async (event) => {

        const response = await queryFPAi()
        console.log(response);

    }



    useEffect(() => {
        fetchIngredients();
    }, []);

    const listItems = ingredients.map((ingredient) =>
        <div><WellItem item={ingredient} fetchIngredients={fetchIngredients} /></div>
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
                <div className='flex flex-col-reverse'>{listItems}</div>
                <button id='new_button' className="border-2 border-[#003049] text-[#003049] hover:bg-[#003049] hover:text-white p-2 rounded-md my-8" onClick={handleClick}>Get New Drinks</button>
                <button id='temp_button' className="border-2 border-[#003049] text-[#003049] hover:bg-[#003049] hover:text-white p-2 rounded-md my-8" onClick={flavorClick}>Flavor Profiles</button>
                <div id="loader" className='hidden flex-col items-center justify-center'>
                    <ReactLoading type={'bars'} color={'#003049'} height={50} width={100} />
                    <div id='progress-text' className='my-8'>Building Flavor Profiles</div>
                </div>

            </div>
        </div>
    )
}

export default Inventory
