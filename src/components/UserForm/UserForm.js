import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

const UserForm = ({setOnSave}) => {
const {register, handleSubmit, reset} = useForm();
    const create = (user) => {
        console.log(user);

            fetch('http://jsonplaceholder.typicode.com/users', {
                headers: {'content-type':'application/json'},
                body:JSON.stringify(user),
                method: 'POST',
            }).then(value => {
                if (!value.ok) {
                    throw Error('error')
                }
                return value.json()
            })
                .then(() => {
                    setOnSave(prev => !prev)
                    reset()
                })
                .catch(e => {
                    console.log(e);
                })

    }



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
                    <input type="text" placeholder={'userName'} {...register('userName')}/>
                </label>

                <label>email:
                    <input type="text" placeholder={'email'} {...register('email')}/>
                </label>
                <button>createUser</button>
            </form>


        </div>
    );
};

export default UserForm