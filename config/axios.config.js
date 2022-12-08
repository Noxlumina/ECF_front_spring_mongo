const axios = require("axios").default;

//créer une instance Axios avec une configuration personnalisée
const http = axios.create({
    baseURL: 'http://localhost:8090', headers: { 'Allow-Control-Origin': '*', 'Content-Type': 'application/json' }
});

export { http };