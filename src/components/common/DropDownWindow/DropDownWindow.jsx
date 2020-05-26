import React from 'react';
import classes from './DropDownWindow.module.css';
import { NavLink } from 'react-router-dom';

const DropDownWindow = (props) => {
    return (
        <div className={classes.drop_down_window}>
            <div className={classes.title}><a href="">{props.title}</a></div>
            <ul className={classes.items}>
                {props.items.map(elem => {
                    return (
                        <li className={classes.userItem} key={elem.id}> <NavLink to={`/profile/${elem.id}`}>{elem.name}</NavLink> </li>
                    )
                })}
            </ul>
            <div className={classes.footer}><a href="#">View all</a></div>
        </div>
    )
}

export default DropDownWindow
