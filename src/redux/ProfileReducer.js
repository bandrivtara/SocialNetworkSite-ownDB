import { usersAPI, profileAPI } from '../API/API'
import { usersJsonAPI, profileJsonAPI } from '../API/API-JSON'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_MAIN_INFO_PROFILE = 'SET_MAIN_INFO_PROFILE';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_NEW_STATUS = 'SET_NEW_STATUS';


let initialState = {
    mainInfo: {},
    profile: {},
    postData: [
        { id: 1, coverImage: "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05581_ceocwv.jpg", message: "What better way to showcase your business then by sharing a culture post? A culture post is an image or article that highlights what your business is all about. It could be a behind-the-scenes image of your employees doing something quirky or an article about how your business does something a certain way.", likesCount: 12 },
        { id: 2, coverImage: "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05515_d2gzut.jpg", message: "Content curation is simply sharing the content of others in your niche. Sometimes the things you want to share with your audience have already been written. So rather than spending the time crafting an in-depth post, you can quickly share one that’s already been written (by giving them credit of course.)", likesCount: 15 },
        { id: 3, coverImage: "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05624_f5b2ud.jpg", message: "Encouraging people to participate in a social media contest that is related to your brand will boost engagement with those who are already followers and can help you increase subscribers by requiring those that don’t follow or like your page yet to do so in order to participate.", likesCount: 1 },
    ]
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
                { ...state, profile: action.profile.profile[0] }
            )
        }
        case SET_MAIN_INFO_PROFILE: {
            return (
                { ...state, mainInfo: action.profile }
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

export const showUserProfile = (userId, logUserId) => async (dispatch) => {
    let response = await profileJsonAPI.getUserProfile(userId, logUserId);
    dispatch(setUserProfile(response));
    dispatch(setMainInfoProfile(response));
}

export const updateStatusProfile = (status, id) => async (dispatch) => {
    let response = await profileJsonAPI.updateStatusProfile(status, id);
    dispatch(setNewStatus(status));
}

export const uploadPicture = (src, id) => async (dispatch) => {
    let response = await profileJsonAPI.uploadPicture(src, id);
    dispatch(savePhotoSuccess(src));
}

export default profileReducer;