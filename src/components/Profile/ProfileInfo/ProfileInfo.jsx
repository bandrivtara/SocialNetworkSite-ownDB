import React from 'react';

import classes from './ProfileInfo.module.css';

import PhotoBox from './PhotoBox/PhotoBox';
import ProfileStatistic from './ProfileStatistic/ProfileStatistic';
import UserInfo from './UserInfo/UserInfo';


const ProfileInfo = (props) => {

  let userId = props.mainInfo.id;

  return (

    <div className={classes.profile_info}>
      <PhotoBox
        profilePhoto={props.mainInfo.avatar}
        isOwner={props.isOwner}
        uploadPicture={props.uploadPicture}
        userId={userId}
        posts={props.posts}
        openModalWindow={props.openModalWindow}
        modalWindow={props.modalWindow} />
      <UserInfo mainInfo={props.mainInfo}
        followed={props.followed}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        profile={props.profile}
        userId={userId}
        changeFollowed={props.changeFollowed}
      />
      <ProfileStatistic posts={props.posts}
        followers={props.followers}
        openModalWindow={props.openModalWindow}
        modalWindow={props.modalWindow} />
    </div>
  );
}


export default ProfileInfo;