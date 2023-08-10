import {combineReducers, createStore} from "redux";
import {charactersReducer, episodesReducer} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    episodes: episodesReducer,
    characters: charactersReducer
});

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
})


const store = createStore(rootReducer, composeEnhancers());

export {
    store
}
