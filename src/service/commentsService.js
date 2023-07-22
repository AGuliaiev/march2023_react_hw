import {apiService} from "./appService";
import {urls} from "../conctants";

const commentsService = {
    getAll:()=> apiService.get(urls.comments)
}

export {
    commentsService
}