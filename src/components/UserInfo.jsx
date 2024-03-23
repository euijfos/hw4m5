import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

const UserInfo = () => {
    const user = useSelector(selectUser);

    return (
        <div>
            <h2>User Info</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
        </div>
    );
};

export default UserInfo;