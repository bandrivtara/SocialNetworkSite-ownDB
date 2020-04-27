import React from 'react';

import classes from '../ProfileInfo.module.css';

import ProfileStatus from './ProfileStatus/ProfileStatus';

const UserInfo = (props) => {

  return (
    <div className={classes.status}>
      <div>
        <h2>{props.mainInfo.name} {props.mainInfo.last_name}</h2>
        <ProfileStatus
          status={props.mainInfo.status}
          userId={props.mainInfo.id}
          updateStatus={props.updateStatus} isOwner={props.isOwner}
          changeFollowed={props.changeFollowed} />
        {props.isOwner
          ? <p className={classes.status_info}>Click on status to change</p>
          : (props.followed ? <button className={classes.button_false} onClick={() => { props.changeFollowed(false, props.userId) }}>Unfollow</button>
            : <button className={classes.button_true} onClick={() => { props.changeFollowed(true, props.userId) }}>Follow</button>)}
      </div>
      <div className={classes.job_info}>
        <p>{props.profile.job}</p>
        <p>{props.profile.email}</p>
      </div>
    </div>
  );
}


export default UserInfo;