import axios from 'axios';


const apiDB = axios.create({
    baseURL: 'https://vyana-db.herokuapp.com/api',
});


export default apiDB;