import {apiService} from "./appService";
import {urls} from "../conctants";

const albumsService = {
    getAll:()=>apiService.get(urls.albums)
}
export {
    albumsService
}