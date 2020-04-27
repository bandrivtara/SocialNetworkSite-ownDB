import React from 'react';

import classes from './Profile.module.css';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} mainInfo={props.mainInfo}
        updateStatus={props.updateStatus} isOwner={props.isOwner}
        uploadPicture={props.uploadPicture} followed={props.followed}
        changeFollowed={props.changeFollowed} posts={props.posts}
        followers={props.followers} openModalWindow={props.openModalWindow}
        modalWindow={props.state.modalWindow}/>
      <MyPostsContainer openModalWindow={props.openModalWindow}
        state={props.state} isOwner={props.isOwner}/>/>
    </div>

  );
}

export default Profile;