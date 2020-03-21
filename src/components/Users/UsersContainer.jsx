import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { setUsersAC, unfollowAC, followAC } from '../../redux/UsersReducer';

let mapSateToProps = (state) => {
    return {
        users: state.users.users
    }
}

let mapDispathToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapSateToProps, mapDispathToProps)(Users) 