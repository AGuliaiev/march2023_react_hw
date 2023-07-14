import React, {useState} from 'react';
import Users from "../Users/Users";
import UserForm from "../UserForm/UserForm";

const UserContainer = () => {
    const [onSave, setOnSave] = useState(null);
    return (
        <div>
            <UserForm setOnSave={setOnSave()}/>
            <br/>
            <Users onSave={onSave}/>
        </div>
    );
};

export default UserContainer;