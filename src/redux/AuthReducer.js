import { usersAPI, authAPI } from '../API/API' 
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';


let initialState = {
        userId: null,
        email: null,
        login: null,
        isAuth: false
};


const AuthReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_DATA: {
            return {...state, 
               ...action.data,
                }
            };

        default: 
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
      type: SET_USER_DATA,
      data: {userId, email, login, isAuth}
    }
}

export const getAuthUserData = () => async (dispatch) => {
    let response = await usersAPI.getUserData();
        if (response.resultCode === 0) {
            let {id, email, login} = response.data;
            dispatch(setAuthUserData(id, email, login, true));  
        }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
            
        } else if (response.data.resultCode === 1){
            dispatch(stopSubmit('login', {_error: response.data.messages}));
        }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false)); 
        }
}
  


export default AuthReducer;