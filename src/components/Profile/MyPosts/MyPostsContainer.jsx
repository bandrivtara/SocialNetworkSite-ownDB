import React from 'react';

import {addPostActionCreator} from '../../../redux/ProfileReducer';

import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    state: state.profile
  }
}

let mapDispatchToProps = (dispatch) => {
  
  return {
    addPost: (posts) => {
        dispatch(addPostActionCreator(posts));
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;