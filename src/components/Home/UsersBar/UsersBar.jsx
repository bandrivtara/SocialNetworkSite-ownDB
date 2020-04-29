import React from 'react';

import classesHome from '../Home.module.css';
import classes from './UsersBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const UsersBar = (props) => {

    let getUser = () => {
        return (
            props.users.map(elem => (
                <div className={classes.user_box}>
                    <div className={classes.user_box_l}>
                        <img src={elem.avatar} alt="ava" />
                        <div className={classes.user_info}>
                            <h3>{elem.name} {elem.last_name}</h3>
                            <p>{elem.status}</p>
                        </div>
                    </div>
                    <button onClick={()=>{props.follow(elem.id)}}><FontAwesomeIcon icon="plus" /></button>
                </div>
            ))
        )
    }

    return (
        <div className={classes.users_container}>
            <div className={classesHome.box}>
                <NavLink to='/users/'>You may know...</NavLink>
            </div>
            <div className={classes.users_box}>
                {getUser()}
            </div>
            <div className={classesHome.box}>
                <button onClick={() => { props.getMore() }}>More Users</button>
            </div>
        </div>
    )
}

export default UsersBar; 