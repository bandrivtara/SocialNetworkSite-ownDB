import React from 'react';

import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = ()=> {
    return (
        <nav className={classes.sidebar}>
            <ul>
                <li className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
                <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></li>
                <li className={classes.item}><NavLink to="/News" activeClassName={classes.active}>News</NavLink></li>
                <li className={classes.item}><NavLink to="/Settings" activeClassName={classes.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;

