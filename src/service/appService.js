import axios from "axios";
import {baseURL} from "../conctants";


const apiService = axios.create({baseURL});


export {
    apiService
}