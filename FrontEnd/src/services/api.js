// FrontEnd\src\componentes\services\api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:3000' // URL BASE DA API    
});

export default api;
