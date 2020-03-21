const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET_USERS';


let initialState = {
    users: [
        {id:1, followed: true, fullname: 'Taras B.', status: 'Focus at React', location: {city: 'Cracow', country: 'Poland'}},
        {id:2, followed: true, fullname: 'Oleg F.', status: 'I love my girl', location: {city: 'Lviv', country: 'Ukraine'}},
        {id:3, followed: false, fullname: 'Max M.', status: 'Want a rest...', location: {city: 'New York', country: 'USA'}},
        {id:4, followed: false, fullname: 'Dawid F.', status: 'I love my job!', location: {city: 'Kiev', country: 'Ukraine'}},
    ]    
}

const UsersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(e => {
                    if(e.id === action.userId) {
                        return (
                            {...e, followed: true}
                        )
                    }
                    return e;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if(e.id === action.userId) {
                        return (
                            {...e, followed: false}
                        )
                    }
                    return e;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, action.users]}
        }

        default: 
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW}, userId);
export const unfollowAC = (userId) => ({type: UNFOLLOW}, userId);
export const setUsersAC = (users) => ({type: SET_USERS}, users)

export default UsersReducer;