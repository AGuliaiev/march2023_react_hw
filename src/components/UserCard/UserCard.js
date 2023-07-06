import React from 'react';
import styles from './UserCard.module.css'
const UserCard = (props) => {
    const { users } = props;
    return (
        <div className={styles.wrapper}>
            <h1 style={{
                textAlign: "start"
            }}>
                {users.name}
            </h1>
            <h2 style={{textAlign: "start"}}>
                {users.username}
            </h2>
            <p>
                {users.phone}
            </p>
        </div>
    );
};

export default UserCard;