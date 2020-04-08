import React from 'react';

import classes from './ProfileInfo.module.css';

import PhotoBox from './PhotoBox/PhotoBox';
import ProfileStatus from './ProfileStatus/ProfileStatus';

import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  

  return (
    
    <div className={classes.profile_info}>
      <PhotoBox profilePhoto={props.profile.photos.small} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
      <div className={classes.status}>
        <h2>{props.profile.fullName}</h2>
        <p>{props.profile.aboutMe}</p> 
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} />
        {props.isOwner ? <p className={classes.status_info}>Click on status to change</p> : <button className={classes.standart_button}>Following</button>}
      </div>
      <div className={classes.statistic}>
        <p>Posts <span>15</span></p>
        <p>Followers <span>700</span></p>
        <p>Followings <span>854</span></p>
      </div>
    </div>
  );
}
 

export default ProfileInfo;