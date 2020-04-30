import { dialogsJsonAPI } from '../API/API-JSON'

const SET_NEW_DIALOGS = 'SET_NEW_DIALOGS';
const SET_DIALOGS = 'SET_DIALOGS';
const SET_USERS = 'SET_USERS';


let initialState = {
        dialogs: [],
        users: []
}


const dialogReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_NEW_DIALOGS: {
            return {...state, 
                dialogs: [...state.dialogs, 
                state.dialogs.filter(elem => elem.id === action.id)[0], action.message
                ]
            };
        }
        case SET_DIALOGS: {
            return {...state, dialogs: action.dialogs};
        }
        case SET_USERS: {
            return {...state, users: action.users};
        }
        default :
            return state;
    }
}

export const setDialogs = (dialogs) => ({type: SET_DIALOGS, dialogs});

export const setNewDialogs = (message, id) => ({type: SET_NEW_DIALOGS, message, id});
export const setUsers = (users) => ({type: SET_USERS, users});

export const getAllDialogs = () => async (dispatch) => {
    let res = await dialogsJsonAPI.getAllDialogs();
    dispatch(setDialogs(res));
}

export const getUsers = () => async (dispatch) => {
    let res = await dialogsJsonAPI.getUsers();
    dispatch(setUsers(res));
}

export const sendMessage = (messages, id) => async (dispatch) => {
    let res = await dialogsJsonAPI.sendMessage(messages, id);
    dispatch(setNewDialogs(res, id));
}

export default dialogReducer; 