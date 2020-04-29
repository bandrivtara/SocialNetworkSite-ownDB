import { dialogsJsonAPI } from '../API/API-JSON'

const SEND_MESSAGE = 'SEND-MESSAGE';
const SET_DIALOGS = 'SET_DIALOGS';
const SET_USERS = 'SET_USERS';


let initialState = {
        dialogs: [],
        users: []
}


const dialogReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SEND_MESSAGE: {
            return {...state,
                messageData: [...state.messageData, {id: 1, 
                    message: action.message, 
                    myMessage: true
                }]
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

export const sendMessage = (message) => ({type: SEND_MESSAGE, message});
export const setDialogs = (dialogs) => ({type: SET_DIALOGS, dialogs});
export const setUsers = (users) => ({type: SET_USERS, users});

export const getAllDialogs = () => async (dispatch) => {
    let res = await dialogsJsonAPI.getAllDialogs();
    dispatch(setDialogs(res));
}

export const getUsers = () => async (dispatch) => {
    let res = await dialogsJsonAPI.getUsers();
    dispatch(setUsers(res));
}

export default dialogReducer; 