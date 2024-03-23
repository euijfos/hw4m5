import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        age: '',
        gender: ''
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        }
    }
});

export const { setName, setAge, setGender } = userSlice.actions;

export const selectUser = state => state.user;

export default userSlice.reducer;