import { usersJsonAPI } from '../API/API-JSON'
import { authAPI } from '../API/API-JSON'
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};


const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }

        default:
            return state;
    }
}


export const setAuthUserData = (userId, login, password, isAuth) => ({ type: SET_USER_DATA, data: { userId, login, password, isAuth } });

export const getAuthUserData = () => async (dispatch) => {
    let res = await usersJsonAPI.getUserData();
    if (res.isAuth) {
        dispatch(setAuthUserData(res.id, res.login, res.password, res.isAuth));
    }
}

export const login = (login, password) => async (dispatch) => {
    let res = await authAPI.login(true);
    if (res.login === login && res.password === password) {
        dispatch(getAuthUserData())
    } else {
        dispatch(stopSubmit('login', { _error: "Please try again" }));
    }
}

export const logout = () => async (dispatch) => {
    await authAPI.logout(false);
    dispatch(setAuthUserData(null, null, null, false));
}



export default AuthReducer;