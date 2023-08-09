import axios from "axios";
import {baseURL} from "../consnans";

const apiService = axios.create({baseURL});

export {
    apiService
}