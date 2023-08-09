import {apiService} from "./apiService";
import {urls} from "../consnans";

const episodesService = {
    getAll:(page)=>apiService.get(urls.episodes, {params:{page}})
}

export {
    episodesService
}