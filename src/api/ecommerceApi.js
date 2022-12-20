

import axios from "axios";

const ecommerce = axios.create({
    baseURL: import.meta.env.VITE_APP_URL_API
})


export default ecommerce;