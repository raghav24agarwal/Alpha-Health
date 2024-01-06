import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialUserState = {
    username: '',
    fullname: '',
};

const userSlice = createSlice({
    name: 'User',
    initialState: initialUserState,
    reducers: {
        userDetails : (state, action) => {
            state.username = action.payload['username'];

            console.log("Inside Store")
            console.log(state.username)
            console.log(action.payload)
        }
    }
})

export const userActions = userSlice.actions;

const store = configureStore({
    reducer: userSlice.reducer,
})

export default store;
