import React from 'react';
import { useDispatch } from 'react-redux';
import { setName, setAge, setGender } from './userSlice';

const UserForm = () => {
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                dispatch(setName(value));
                break;
            case 'age':
                dispatch(setAge(value));
                break;
            case 'gender':
                dispatch(setGender(value));
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <h2>User Form</h2>
            <label>Name: </label>
            <input type="text" name="name" onChange={handleChange} /><br />
            <label>Age: </label>
            <input type="text" name="age" onChange={handleChange} /><br />
            <label>Gender: </label>
            <input type="text" name="gender" onChange={handleChange} /><br />
        </div>
    );
};

export default UserForm;