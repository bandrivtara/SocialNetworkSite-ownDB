import { createStore, combineReducers } from 'redux';

import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import navReducer from "./NavReducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer,
    nav: navReducer
})

let store = createStore(reducers);

export default store;
