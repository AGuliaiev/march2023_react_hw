import {apiService} from "./apiService";
import {urls} from "../conctants";

const albumsService = {
    getAll:()=>apiService.get(urls.albums)
}
export {
    albumsService
}