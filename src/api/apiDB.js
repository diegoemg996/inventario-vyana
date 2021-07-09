import axios from 'axios';


const apiDB = axios.create({
    baseURL: 'http://localhost:8080/api',
});


export default apiDB;