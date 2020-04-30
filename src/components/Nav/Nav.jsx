import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';


const Nav = (props)=> {
    return (
        <nav className={classes.sidebar}>
                <div className={classes.item}>
                    <NavLink to="/home" activeClassName={classes.active}>
                        <FontAwesomeIcon icon="home" />
                        <p>Home</p>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>
                        <FontAwesomeIcon icon="envelope" /> 
                        <p>Messages</p>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/users" activeClassName={classes.active}>
                        <FontAwesomeIcon icon="users" />
                        <p>Users</p>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/photos" activeClassName={classes.active}>
                        <FontAwesomeIcon icon="camera" />
                        <p>Photos</p>
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.active}>
                        <FontAwesomeIcon icon="user" />
                        <p>Profile</p>
                    </NavLink>
                </div>
        </nav>
    )
}


export default Nav;

