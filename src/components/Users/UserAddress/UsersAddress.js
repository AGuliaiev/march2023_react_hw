import React from 'react';


const UsersAddress = ({addrees}) => {
    const {street, suite, city} = addrees;

    return (
        <div>
            <div>Street: {street}</div>
            <div>Suite: {suite}</div>
            <div>City: {city}</div>
        </div>
    );
};

export default UsersAddress;