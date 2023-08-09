import {episodesActionsTypes} from "../actions";

const initialState={
    prevPage:null,
    nextPage:null,
    episodes: []
};
const episodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case episodesActionsTypes.SET:
            return {
                ...state,
                prevPage: action.payload.info.prev,
                nextPage: action.payload.info.next,
                episodes: action.payload.results
            }

    }

}