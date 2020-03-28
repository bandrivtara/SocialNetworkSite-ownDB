import { usersAPI } from '../API/API' 

const SET_USER_DATA = 'SET_USER_DATA';


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
               isAuth: true
                }
            };

        default: 
            return state;
    }
}


export const setAuthUserData = (userId, email, login) => {
    return {
      type: SET_USER_DATA,
      data: {userId, email, login}
    }
}

export const getAuthUserData = () => {
    return (dispatch) => {
        usersAPI.getUserData().then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setAuthUserData(id, email, login));  
            }
        });
    }
}
  


export default AuthReducer;