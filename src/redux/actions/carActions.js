import {carService} from "../../services";

const carActionsType = {
    SET_CARS:'SET_CARS',
    SET_CAR_FOR_UPDATE:'SET_CAR_FOR_UPDATE'
}
const actions = {
    setCars:(payload)=>({type:carActionsType.SET_CARS, payload}),
    setCarForUpDate:(payload)=>({type:carActionsType.SET_CAR_FOR_UPDATE, payload})
}

const getCars =()=>async dispatch=>{
    const {data} = await carService.getAll();
    dispatch(actions.setCars(data))
}
const create = (car) => async dispatch=>{
    await carService.create(car)
    await dispatch(getCars())
}
const carActions = {
    getCars,
    create,
    setCarForUpDate:actions.setCarForUpDate
}

export {
    carActions,
    carActionsType
}