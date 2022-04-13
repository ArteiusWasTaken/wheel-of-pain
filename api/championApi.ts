import axios from "axios";

const championApi = axios.create({
    baseURL: 'https://league-champions-api.herokuapp.com'
})

export default championApi;