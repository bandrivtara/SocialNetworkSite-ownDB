import { usersJsonAPI } from '../API/API-JSON';

const SET_ALL_USERS = 'SET_ALL_USERS';



let initialState = {
    users: [],
};

const navReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case SET_ALL_USERS: {
            return { ...state, users: [...action.users] }
        }
        default:
            return state;
    }
}

export const setAllUsers = (users) => ({ type: SET_ALL_USERS, users });

export const getAllUsers = () => async (dispatch) => {
    let allUsers = await usersJsonAPI.getAllUsers();
    dispatch(setAllUsers(allUsers));
}


export default navReducer;