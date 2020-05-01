import React from 'react';
import { NavLink } from 'react-router-dom';

import photoFile from '../../../assets/images/noUser.png';

import classes from './User.module.css';

const User = (props) => {
    let u = props.user;
    return (
        <div className={classes.user_box}>
            <div className={classes.user_box_info}>
                <NavLink className={classes.user_box_img} to={'/profile/' + u.id}>
                    <img src={u.avatar !== null ? u.avatar : photoFile} alt="" />
                    <p>view profile</p>
                </NavLink>
                <div>
                    <div className={classes.user_box_name}>{u.name}</div>
                    <div className={classes.user_box_status}>{u.status}</div>
                </div>
            </div>
            <div>
                <div className={classes.user_box_followed}>
                    {u.followed
                        ? <button className={classes.user_box_followed_true} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button className={classes.user_box_followed_false} onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>

            </div>
        </div>
    )
}

export default User;