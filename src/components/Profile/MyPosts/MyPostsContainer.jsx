import React from 'react';

import { addPostActionCreator } from '../../../redux/ProfileReducer';

import MyPosts from './MyPosts';
import { connect } from 'react-redux';

class MyPostsContainer extends React.Component {

  render() {
    return (
      <MyPosts posts={this.props.posts} openModalWindow={this.props.openModalWindow}
      state={this.props.state} isOwner={this.props.isOwner} addPost={this.props.addPost}/>
    )
  }
}


let mapStateToProps = (state) => {
  return {
    posts: state.profile.posts.userPosts,
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    addPost: (posts) => {
      dispatch(addPostActionCreator(posts));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);
