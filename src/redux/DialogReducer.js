const UPDATE_TEXT = 'UPDATE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
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
    
        newMessageText: "",
}


const dialogReducer = (state = initialState, action) => {

    if (action.type === UPDATE_TEXT) {
        state.newMessageText = action.newText;
    } else if (action.type === SEND_MESSAGE) {
        let newMessage = {id: 1, 
            message: state.newMessageText, 
            myMessage: true
        }
        state.messageData.push(newMessage);
    }



    return state;
}

export const updateTextActionCreator = (text) => {
    return {
        type: UPDATE_TEXT,
        newText: text,
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export default dialogReducer;