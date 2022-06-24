import axios from "axios";

const api = axios.create({
    baseUrl: 'https://sujeitoprogramador.com/r-api/?api=filmes'
});

export default api;