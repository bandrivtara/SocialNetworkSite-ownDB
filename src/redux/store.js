import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import navReducer from "./NavReducer";

let store = {
    _state: {
        profile: {
            postData: [
                {id: 1, message: "How are u?", likesCount: 12},
                {id: 2, message: "It's my second post", likesCount: 15},
                {id: 3, message: "It's my first post?", likesCount: 1},
            ],
        },
    
        dialog: {
            dialogData: [
                {id: 1, name: "Taras"},
                {id: 2, name: "Max"},
                {id: 3, name: "Katia"},
                {id: 4, name: "Ola"},
                {id: 5, name: "Dima"},
            ],
        
            messageData: [
                {id: 1, message: "Hello, I want to introduce myself", myMessage: true},
                {id: 2, message: "Whats up"},
                {id: 3, message: "Where are u going today?", myMessage: true},
                {id: 4, message: "Leeeeeeee"},
                {id: 5, message: "Dima", myMessage: true},
            ],
    
        }, 

        newPostText: "",

        nav: {
            friendsData: [
                {name: "Kiril", id: 1},
                {name: "Dmytro", id: 2},
                {name: "Alla", id: 3},
            ]
        }
    },
    
    _callSubscriber() {
        console.log('State is changed')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state = dialogReducer(this._state, action);
        this._state = profileReducer(this._state, action);
        this._state.nav = navReducer(this._state.nav, action);

        this._callSubscriber(this._state);
    }
}

export default store;