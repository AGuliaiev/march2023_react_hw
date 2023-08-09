import {apiService} from "./apiService";
import {urls} from "../consnans";

const charactersService = {
    getByIds:(IDs) => apiService.get(urls.characters.byId(IDs))
}

export {
    charactersService
}