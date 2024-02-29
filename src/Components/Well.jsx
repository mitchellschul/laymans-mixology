import { React, useEffect, useState } from 'react'
import axios from 'axios'



import { addIngredient } from '../Assets/js/functions.js'
import { queryAi } from '../Assets/js/functions.js'

const Well = () => {

    const [ingredients, setIngredients] = useState([]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const query = event.target.query.value;
        console.log(query);
        const response = await axios.post('http://127.0.0.1:8000/api/addIngredient/', { query: query });
        console.log('ingredient added')
        fetch()
    }

    const fetchIngredients = async (event) => {
        const response = await axios.get('http://127.0.0.1:8000/api/getIngredients/')
        setIngredients(response.data[0].ingredients);
    }



    useEffect(() => {
        fetchIngredients();
    }, []);

    const listItems = ingredients.map((ingredient) =>
        <li>{ingredient}</li>
    );

    return (
        <div className='w-2/5 h-screen flex flex-col'>Well
            <form onSubmit={handleSubmit}>
                <input type='text' className='border border-black' name='query' />
                <button type='submit' className='border border-black'>Add Item</button>
            </form>

            <ul>{listItems}</ul>
            <button onClick={queryAi}>refresh</button>

        </div>
    )
}

export default Well