import React, {useState} from 'react';
import Users from "../Users/Users";
import UserForm from "../UserForm/UserForm";

const UserContainer = () => {
    const [users, setUsers] = useState([]);
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <br/>
            <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export default UserContainer;