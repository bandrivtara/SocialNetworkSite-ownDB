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
    
    switch (action.type) {
        case SEND_MESSAGE: {
            return {...state,
                messageData: [...state.messageData, {id: 1, 
                    message: action.message, 
                    myMessage: true
                }]
            };
        }
        default :
            return state;
    }
}

export const sendMessageActionCreator = (message) => {
    return {
        type: SEND_MESSAGE,
        message
    }
}

export default dialogReducer;