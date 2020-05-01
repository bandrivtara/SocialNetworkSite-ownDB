import React from 'react';

import classes from '../ProfileInfo.module.css';

import FollowersList from './FollowersList/FollowersList'

const ProfileStatistic = (props) => {

  let openFollowersList = () => {
    if (!props.modalWindow) {
      props.openModalWindow("followersList")
    }
  }

  let closeModal = () => {
    props.openModalWindow(false)
  }

  return (
    <div className={classes.statistic}>
      {(props.modalWindow === "followersList") &&
        <FollowersList closeModal={closeModal}
          followers={props.followers} />}
      <button>Posts <span>{props.posts.length}</span></button>
      <button onClick={() => { openFollowersList() }}>Followers <span>{props.followers.length}</span></button>
    </div>
  );
}


export default ProfileStatistic;