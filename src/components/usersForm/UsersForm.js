import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";

const UsersForm = ({setUsers}) => {
    const {register, reset, handleSubmit} = useForm();
    const create = (data) => {
        axios
            .post('https://jsonplaceholder.typicode.com/users', data)
            .then(value => {
            setUsers(prev=>[...prev, value.data])
            reset()
        })
            .catch(error => console.log(error));


    };
    return (
        <div>
            <form onSubmit={handleSubmit(create)}>
                <label>id:
                    <input type="text" placeholder={'id'} {...register('id')}/>
                </label>

                <label>name:
                    <input type="text" placeholder={'name'} {...register('name')}/>
                </label>

                <label>userName:
                    <input type="text" placeholder={'username'} {...register('username')}/>
                </label>

                <label>email:
                    <input type="text" placeholder={'email'} {...register('email')}/>
                </label>
                <label>city:
                    <input type="text" placeholder={'city'} {...register('address.city')}/>
                </label>
                <button>createUser</button>
            </form>

        </div>
    );
}

export default UsersForm;