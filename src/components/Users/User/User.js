import React from 'react';

const User = ({user, setUserId}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>UserName: {username}</div>
            <div>Email: {email}</div>
            <button onClick={()=>setUserId(id)}>getPosts</button>
        </div>
    );
};

export default User;