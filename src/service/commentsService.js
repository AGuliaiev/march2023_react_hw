import {apiService} from "./apiService";
import {urls} from "../conctants";

const commentsService = {
    getAll:()=> apiService.get(urls.comments)
}

export {
    commentsService
}