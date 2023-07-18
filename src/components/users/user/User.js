import React from 'react';

const User = ({user}) => {
    const {id,name,username,email,address:{city}} = user;

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>userName:{username}</div>
            <div>email:{email}</div>
            <div>city:{city}</div>
        </div>
    );
};

export default User;