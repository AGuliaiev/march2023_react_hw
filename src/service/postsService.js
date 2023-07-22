import {apiService} from "./appService";
import {urls} from "../conctants";

const postsService = {
    getById:(id)=> apiService.get(urls.posts.byId(id))
}

export {
    postsService
}