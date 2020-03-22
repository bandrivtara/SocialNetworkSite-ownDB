import React from 'react';

import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

import Friends from './Friends/Friends';

import { connect } from 'react-redux';

const Nav = (props)=> {
    return (
        <nav className={classes.sidebar}>
            <ul>
                <li className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
                <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></li>
                <li className={classes.item}><NavLink to="/users" activeClassName={classes.active}>Users</NavLink></li>
                <li className={classes.item}><NavLink to="/News" activeClassName={classes.active}>News</NavLink></li>
                <li className={classes.item}><NavLink to="/Settings" activeClassName={classes.active}>Settings</NavLink></li>
            </ul>
            <div className={classes.myFriends}>
                <h3>Friends</h3>
                {/* <NewNav /> */}
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

