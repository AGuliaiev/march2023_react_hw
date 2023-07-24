import {apiService} from "./apiService";
import {urls} from "../conctants";

const todosService = {
    getAll:()=>apiService.get(urls.todos)
}

export {
    todosService
}