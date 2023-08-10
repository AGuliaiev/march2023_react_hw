import {carActionsType} from "../actions/carActions";

const initialState = {
    cars:[],
    carForUpDate: null
};
const carReducer = (state=initialState, action)=>{
    switch (action.type) {
        case carActionsType.SET_CARS:
            return{
                ...state,
                cars: action.payload
            }
        case carActionsType.SET_CAR_FOR_UPDATE:
            return {
                ...state,
                carForUpDate: action.payload
            }
        default:
            return state
    }

}

export {
    carReducer
}