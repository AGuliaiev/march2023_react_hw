import React, {useEffect} from 'react';
import axios from "axios";
import User from "./user/User";

const Users = ({users, setUsers}) => {

useEffect(() => {
    axios
        .get(`https://jsonplaceholder.typicode.com/users/`)
        .then((response) => setUsers(response.data))
        .catch((error) => console.log(error));
},[])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;
