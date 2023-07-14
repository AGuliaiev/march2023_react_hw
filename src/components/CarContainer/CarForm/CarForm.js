import React, {useState} from 'react';

const CarForm = () => {
    const initialState = {
        brand:'',
        price:'',
        year:''
    }
    const [car, setCar] = useState(initialState);

    const inputHandle = (e) => {
        setCar(prevState => ({...prevState, [e.target.name]:e.target.value}))

    };
const save = (e) => {
    e.preventDefault()
    fetch('http://owu.linkpc.net/carsAPI/v1/cars', )
}
    return (
        <form onSubmit={save}>
            <div>
                <label>
                    <input type="text" value={car.brand} name={'brand'} onChange={inputHandle}/>
                </label>
            </div>
            <div>
                <label>
                    <input type="text" value={car.price} name={'price'} onChange={inputHandle}/>
                </label>
            </div>
            <div>
                <label>
                    <input type="text" value={car.year} name={'year'} onChange={inputHandle}/>
                </label>
            </div>
            <button>Save</button>
        </form>
    );
};

export default CarForm;