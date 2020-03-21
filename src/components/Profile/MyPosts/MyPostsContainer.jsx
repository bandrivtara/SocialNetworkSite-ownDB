import React from 'react';

import {addPostActionCreator, updateTextActionCreator} from '../../../redux/ProfileReducer';

import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    state: state.profile
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
        dispatch(addPostActionCreator());
    },
    onChangeText: (text) => {
        dispatch(updateTextActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;