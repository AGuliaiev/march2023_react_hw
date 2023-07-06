import React from 'react';
import UserCard from "./components/UserCard/UserCard";
import {Users} from "./assets/Users";
import UsersComponent from "./components/UsersComponent/UsersComponent";
const title = 'Users list';
const App = () => {

    return (
        <div className='app'>
            <h1 className='link'>{title}</h1>
        <UsersComponent/>
        </div>
    );
};

export default App;