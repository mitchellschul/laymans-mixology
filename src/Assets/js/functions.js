import axios from "axios";

export async function addIngredient(props) {

    try {
        const query = props;
        console.log("QUERY : ", query);
        const response = await axios.post('http://127.0.0.1:8000/api/addIngredient/', query);
        console.log('ingredient added')
    }
    catch (e) { console.log('ERROR: ', e) }
}

export async function queryAi() {
    var count = 0

    try {
        queryFPAi()
        document.getElementById('progress-text').innerText = "Building Flavor Profiles"
        changeText()
        console.log('Running the AI')
        const response = await axios.post('http://127.0.0.1:8000/api/OPAIEndpointQuery/');
        const formatResponse = await axios.post('http://127.0.0.1:8000/api/setDrinks/', { query: response.data['response-payload'] });

    }
    catch (e) {
        console.log('QUERYAI ERROR: ', e)
        console.log("HEY THERES A FREAKING ERROR HERE BROSKI", count)
        // queryAi()
    }
}

export async function queryFPAi() {
    var count = 0

    try {
        count += 1
        console.log('Running the AI')
        const response = await axios.post('http://127.0.0.1:8000/api/OPAIEndpointFPQuery/');
        const formatResponse = await axios.post('http://127.0.0.1:8000/api/setFlavorProfiles/', { query: response.data['response-payload'] });
        const get = await axios.get('http://127.0.0.1:8000/api/getSavedDrinks/')


    }
    catch (e) {
        console.log('QUERYAI ERROR: ', e)
        console.log("HEY THERES A FREAKING ERROR HERE BROSKI", count)
        // queryAi()
    }
}

async function changeText() {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(2000)
    document.getElementById('progress-text').innerText = "Generating New Drinks"
}