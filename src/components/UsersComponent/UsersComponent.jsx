import React, {useEffect, useState} from 'react';
// import {Users} from "../../assets/Users";
import UserCard from "../UserCard/UserCard";

const UsersComponent = () => {
    const [ users, setUsers] = useState([])

    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users')
            let data = await response.json()
            setUsers(data)
            // .then(response => response.json())
            // .then(data => users = data)
        } catch {}
    }

    return (
        <div>
            {users?.map((user)=>
                <UserCard key={user.id} users={user}/>)}

        </div>
    );
};

export default UsersComponent;