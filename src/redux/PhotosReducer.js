import { photosAPI } from '../API/API-JSON'

const ADD_PHOTO = 'ADD_PHOTO';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

const initialState = {
    photos: {
        adress: [],
        albums: []
    },
    limitOfPhoto: 10,
    isFetching: null
}

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PHOTO:
            return {
                ...state, photos: action.photo
            }
        case TOOGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export default photoReducer;

export const addPhoto = (photo) => ({ type: ADD_PHOTO, photo });
export const toggleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching });

export const showPhoto = (limitOfPhoto) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await photosAPI.getPhotos(limitOfPhoto);
    dispatch(addPhoto(response.data));
    dispatch(toggleIsFetching(false));
}
