import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

import Friends from './Friends/Friends';

import { connect } from 'react-redux';

const Nav = (props)=> {
    return (
        <nav className={classes.sidebar}>
                <div className={classes.item}>
                    <NavLink to="/Home" activeClassName={classes.active}>
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
                    <NavLink to="/News" activeClassName={classes.active}>
                        <FontAwesomeIcon icon="music" />
                        <p>Music</p>
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

let mapStateToProps = (state) => {
    return {
        store: state.nav
    }
}

const NewNav = connect(mapStateToProps)(Friends);

export default Nav;

