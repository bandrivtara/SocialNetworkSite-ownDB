import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchUserContainer from './SearchUser/SearchUserContainer';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.l_side}>
                <a href="/"><FontAwesomeIcon icon="cubes" />Boxes</a>
            </div>
            <div className={classes.r_side}>
                <SearchUserContainer/>
                <div className={classes.notifications}>
                    <FontAwesomeIcon icon="bell" />
                </div>
                <div className={classes.messages}>
                    <FontAwesomeIcon icon="envelope" />
                </div>
                <div className={classes.login_block}>
                    {props.isAuth ?
                        <div>
                            <NavLink to='/profile'>{props.login}</NavLink>
                            <button onClick={props.logout}><FontAwesomeIcon icon="sign-out-alt" /></button>
                        </div> :
                        <NavLink to='/login'>Login</NavLink>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;