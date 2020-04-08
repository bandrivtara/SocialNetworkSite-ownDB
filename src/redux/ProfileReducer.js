import {usersAPI, profileAPI} from '../API/API'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
        postData: [
            {id: 1, message: "What better way to showcase your business then by sharing a culture post? A culture post is an image or article that highlights what your business is all about. It could be a behind-the-scenes image of your employees doing something quirky or an article about how your business does something a certain way.", likesCount: 12},
            {id: 2, message: "Content curation is simply sharing the content of others in your niche. Sometimes the things you want to share with your audience have already been written. So rather than spending the time crafting an in-depth post, you can quickly share one that’s already been written (by giving them credit of course.)", likesCount: 15},
            {id: 3, message: "Encouraging people to participate in a social media contest that is related to your brand will boost engagement with those who are already followers and can help you increase subscribers by requiring those that don’t follow or like your page yet to do so in order to participate.", likesCount: 1},
        ],
        profile: {
            photos: {
                
            }
        },
        status: ''
};


const profileReducer = (state = initialState, action) => {

    

    switch(action.type) {
        case ADD_POST: {
            return {...state, 
                postData: [...state.postData, {
                    message: action.text, 
                    id: state.postData.length +1, 
                    likesCount: 0
                }] 
            };
            
        }
        case SET_USER_PROFILE: {
            return (
                {...state, profile: action.profile}
            )
        }
        case SET_STATUS_PROFILE: {
            return (
                {...state, status: action.status}
            )
        }
        case SAVE_PHOTO_SUCCESS: {
            return (
                {...state, profile: {...state.profile, photos: action.photos}}
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
export const setStatusProfile = (status) => {
    return {
        type: SET_STATUS_PROFILE,
        status
    }
}
export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}

export const showUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));   
}
export const getStatusProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatusProfile(userId);
    dispatch(setStatusProfile(response)); 
}
export const updateStatusProfile = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatusProfile(status);
        if (response.resultCode === 0){
            dispatch(setStatusProfile(status));
        }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
        if (response.resultCode === 0){
            dispatch(savePhotoSuccess(response.data.photos));
        }
}

export default profileReducer;