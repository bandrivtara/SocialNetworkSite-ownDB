import React from 'react';

import classes from './ProfileInfo.module.css';

import PhotoBox from './PhotoBox/PhotoBox';
import ProfileStatus from './ProfileStatus/ProfileStatus';


const ProfileInfo = (props) => {


  return (

    <div className={classes.profile_info}>
      <PhotoBox
        profilePhoto=
        {props.mainInfo.avatar}
        isOwner={props.isOwner}
        uploadPicture={props.uploadPicture}
        userId={props.mainInfo.id} />
      <div className={classes.status}>
        <h2>{props.mainInfo.name}</h2>
        <p>{props.profile.job}</p>
        <p>{props.profile.email}</p>
        <ProfileStatus
          status={props.mainInfo.status}
          userId={props.mainInfo.id}
          updateStatus={props.updateStatus} isOwner={props.isOwner} />
        {props.isOwner
          ? <p className={classes.status_info}>Click on status to change</p>
          : <button className={classes.standart_button}>Following</button>}
      </div>
      <div className={classes.statistic}>
        <p>Posts <span>{props.profile.posts}</span></p>
        <p>Followers <span>700</span></p>
        <p>Followings <span>854</span></p>
      </div>
    </div>
  );
}


export default ProfileInfo;