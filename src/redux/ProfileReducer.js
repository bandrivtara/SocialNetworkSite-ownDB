const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';


let initialState = {
        postData: [
            {id: 1, message: "How are u?", likesCount: 12},
            {id: 2, message: "It's my second post", likesCount: 15},
            {id: 3, message: "It's my first post?", likesCount: 1},
        ],
    
        newPostText: "",
};


const profileReducer = (state = initialState, action) => {

    if (action.type === UPDATE_TEXT) {
        state.newPostText = action.newText;
    } else if (action.type === ADD_POST) {
        let newPost = {
            message: state.newPostText, 
            id:5, 
            likesCount: 45
        };
        state.postData.push(newPost);
        state.newPostText = '';
    } 
    
    return state; 
}


export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
}
  
export const updateTextActionCreator = (text) => {
    return {
        type: UPDATE_TEXT,
        newText: text,
    }
}


export default profileReducer;