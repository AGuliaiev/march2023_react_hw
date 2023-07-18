import React, {useState} from 'react';

import Users from "./users/Users";
import UsersForm from "./usersForm/UsersForm";


const Components = () => {
    const [users, setUsers] = useState([]);
    return (
        <div>
            <UsersForm setUsers={setUsers}/>
            <br/>
            <Users users={users} setUsers={setUsers}/>

        </div>
    );
};

export default Components;