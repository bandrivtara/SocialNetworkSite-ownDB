import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Users.module.css';

import photoFile from '../../assets/images/noUser.png';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); 

    let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
    }

    return (
        <div>
                <div>
                    {pages.map(p => {
                        return(
                            <span 
                                className={props.currentPage === p && classes.selectedPage} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                        )
                    })}
                </div>

                {props.users.map(e => 
                    <div>
                        <span>
                            <div className={classes.img}>
                                <NavLink to={'/profile/' + e.id}>
                                    <img src={ e.photos.small != null ? e.photos.small : photoFile} alt=""/>
                                </NavLink>
                            </div>
                            <div>
                                {e.followed 
                                ? <button onClick={() => {props.unfollow(e.id)}}>Unfollow</button> 
                                : <button  onClick={() => {props.follow(e.id)}}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{e.name}</div>
                                <div>{e.status}</div>
                            </span>
                            <span>
                                <div>{'Ukraine'}</div>
                                <div>{'Ukraine'}</div>
                            </span>
                        </span>
                    </div>
                )}
    
            </div>
    )
}

export default Users;