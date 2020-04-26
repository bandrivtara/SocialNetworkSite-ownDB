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
        changeFollowed={props.changeFollowed}/>
      <MyPostsContainer />
    </div>

  );
}

export default Profile;