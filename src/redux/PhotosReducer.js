import { photosAPI } from '../API/API-JSON'

const ADD_PHOTO = 'ADD_PHOTO';

const initialState = {
    photos: {
        adress: [],
        albums: []
    },
    limitOfPhoto: 10
}

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PHOTO:
            return {
                ...state, photos: action.photo
            }
        default:
            return state;
    }
}

export default photoReducer;

export const addPhoto = (photo) => ({
    type: ADD_PHOTO,
    photo
})

export const showPhoto = (limitOfPhoto) => async (dispatch) => {
    let response = await photosAPI.getPhotos(limitOfPhoto);
    dispatch(addPhoto(response.data));
}
