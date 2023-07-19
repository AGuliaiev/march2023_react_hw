import React, {useContext} from 'react';
import {Context} from "../../CarContainer/CarContainer";
import {carService} from "../../../services/CarService";

const Car = ({car}) => {
    const {setCarForUpdate, setTrigger} = useContext(Context);
    const {id, brand, price, year} = car;
    const deleteCar = async () => {
        try {
            await carService.deleteById(id)
    } catch (e) {
             console.log(e.response.data)

        } finally {
            setTrigger()
   }
    }
    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export default Car;