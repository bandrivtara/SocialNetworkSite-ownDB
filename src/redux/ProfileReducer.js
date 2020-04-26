import { usersAPI, profileAPI } from '../API/API'
import { usersJsonAPI, profileJsonAPI } from '../API/API-JSON'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_MAIN_INFO_PROFILE = 'SET_MAIN_INFO_PROFILE';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_NEW_STATUS = 'SET_NEW_STATUS';
const SET_USER_POSTS = 'SET_USER_POSTS';
const SET_FOLLOWED = 'SET_FOLLOWED';

let initialState = {
    mainInfo: {},
    profile: {},
    posts: {
        userPosts: []
    },
    followed: {}
};


const profileReducer = (state = initialState, action) => {



    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postData: [...state.postData, {
                    message: action.text,
                    id: state.postData.length + 1,
                    likesCount: 0
                }]
            };

        }
        case SET_USER_PROFILE: {
            return (
                { ...state, profile: action.profile.profile[0], 
                    followed: action.profile.followed }
            )
        }
        case SET_MAIN_INFO_PROFILE: {
            return (
                { ...state, mainInfo: action.profile }
            )
        }
        case SET_USER_POSTS: {
            return (
                { ...state, posts: action.posts.posts[0] }
            )
        }
        case SET_NEW_STATUS: {
            return (
                { ...state, mainInfo: { ...state.mainInfo, status: action.status } }
            )
        }
        case SAVE_PHOTO_SUCCESS: {
            return (
                { ...state, mainInfo: { ...state.mainInfo, avatar: action.src } }
            )
        }
        case SET_FOLLOWED: {
            return (
                { ...state, followed: action.status }
            )
        }
 
        default:
            return state;
    }
}


export const addPostActionCreator = (text) => {

    return {
        type: ADD_POST,
        text
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setMainInfoProfile = (profile) => {
    return {
        type: SET_MAIN_INFO_PROFILE,
        profile
    }
}

export const setUserPosts = (posts) => {
    return {
        type: SET_USER_POSTS,
        posts
    }
}

export const setNewStatus = (status) => {
    return {
        type: SET_NEW_STATUS,
        status
    }
}

export const savePhotoSuccess = (src) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        src
    }
}
export const setFollowed = (status) => {
    return {
        type: SET_FOLLOWED,
        status
    }
}

export const showUserProfile = (userId, logUserId) => async (dispatch) => {
    let response = await profileJsonAPI.getUserProfile(userId, logUserId);
    let postsData = await profileJsonAPI.getUserPosts(userId, logUserId);
    dispatch(setUserProfile(response));
    dispatch(setMainInfoProfile(response));
    dispatch(setUserPosts(postsData));
}

export const updateStatusProfile = (status, id) => async (dispatch) => {
    let response = await profileJsonAPI.updateStatusProfile(status, id);
    dispatch(setNewStatus(status));
}

export const uploadPicture = (src, id) => async (dispatch) => {
    let response = await profileJsonAPI.uploadPicture(src, id);
    dispatch(savePhotoSuccess(src));
}

export const changeFollowed = (status, id ) => async (dispatch) => {
    let response = await profileJsonAPI.changeFollowed(status, id);
    dispatch(setFollowed(status));
}

export default profileReducer;