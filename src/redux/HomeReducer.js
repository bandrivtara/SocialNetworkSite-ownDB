import { postsJsonAPI } from '../API/API-JSON'

const SET_GLOBAL_POSTS = 'SET_GLOBAL_POSTS';
const SET_NEW_POST = 'SET_NEW_POST';


let initialState = {
    globalPosts: []
};


const HomeReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_GLOBAL_POSTS:
            return {
                ...state, globalPosts: action.globalPosts
            }
        case SET_NEW_POST:
            return {
                ...state,
                globalPosts: [...state.globalPosts,
                state.globalPosts.filter(elem => elem.id === action.postId)[0],
                action.post]
            }
        default:
            return state;
    }
}


export const setGlobalPosts = (globalPosts) => ({ type: SET_GLOBAL_POSTS, globalPosts })
export const setNewPost = (post, postId) => ({ type: SET_NEW_POST, post, postId })

export const getGlobalPosts = (page) => async (dispatch) => {
    let res = await postsJsonAPI.getGlobalPosts(page);
    dispatch(setGlobalPosts(res));
}

export const sendComment = (post, postId) => async (dispatch) => {
    let res = await postsJsonAPI.sendComment(post, postId);
    dispatch(setNewPost(post, postId));
}



export default HomeReducer;