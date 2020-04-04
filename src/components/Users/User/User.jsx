import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';
import photoFile from '../../../assets/images/noUser.png'


const User = (props) => {
    let u = props.user;
    return (
        <div>
            <span>
                <div className={classes.img}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : photoFile} alt="" />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'Ukraine'}</div>
                    <div>{'Ukraine'}</div>
                </span>
            </span>
        </div>
    )
}

export default User;