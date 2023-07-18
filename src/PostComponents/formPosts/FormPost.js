import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";

const FormPost = ({setPost}) => {
    const {register, reset, handleSubmit} = useForm();
    const save = (data) => {
        axios
            .post('https://jsonplaceholder.typicode.com/posts',data)
            .then(value => {
                setPost((prev) => [...prev, value.data]);
                reset();
            })
            .catch((error) => {
                console.error('Error creating user:', error);
            });
    };


    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit(save)}>
                <label>
                    userId:
                   <input type="text" placeholder={'userId'} {...register('userId')}/>
                </label>
                <label>
                    Id:
                   <input type="text" placeholder={'id'} {...register('id')}/>
                </label>
                <label>
                    title:
                   <input type="text" placeholder={'title'} {...register('title')}/>
                </label>
                <label>
                    body:
                   <input type="text" placeholder={'body'} {...register('body')}/>
                </label>
                <button>createPost</button>
            </form>

        </div>
    );
};

export default FormPost;