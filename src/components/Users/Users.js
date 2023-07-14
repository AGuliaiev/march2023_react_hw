import React, {useEffect, useState} from 'react';
import User from "./User/User";

const Users = ({onSave}) => {
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[onSave])

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;