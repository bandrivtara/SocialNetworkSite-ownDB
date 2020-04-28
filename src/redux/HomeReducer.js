import { postsJsonAPI } from '../API/API-JSON'

const SET_GLOBAL_POSTS = 'SET_GLOBAL_POSTS';


let initialState = {
    globalPosts: []
};


const HomeReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_GLOBAL_POSTS: {
            return {
                ...state, globalPosts: action.globalPosts
            }
        };

        default:
            return state;
    }
}


export const setGlobalPosts = (globalPosts) => ({ type: SET_GLOBAL_POSTS, globalPosts })

export const getGlobalPosts = (page) => async (dispatch) => {
    let res = await postsJsonAPI.getGlobalPosts(page);
    dispatch(setGlobalPosts(res));
}



export default HomeReducer;