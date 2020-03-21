import { createStore, combineReducers } from 'redux';

import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import navReducer from "./NavReducer";
import UsersReducer from './UsersReducer';

let reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer,
    nav: navReducer,
    users: UsersReducer
})

let store = createStore(reducers);

window.store = store; 

export default store;
