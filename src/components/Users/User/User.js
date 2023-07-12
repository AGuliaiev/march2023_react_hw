import React from 'react';
import UsersDetails from "../UserDetails/UsersDetails";
import UsersAddress from "../UserAddress/UsersAddress";
import {Company} from "../Company/Company";

const User = ({user}) => {
    const {id, name, username, email, address, phone, website, company} = user;
    return (
        <div>
            <UsersDetails data={{id,name,username,email,phone,website}}/>
            <UsersAddress addrees={address}/>
            <Company company={company}/>
        </div>
    );
};

export default User;