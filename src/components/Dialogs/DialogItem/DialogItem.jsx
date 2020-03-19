import React from 'react';

import classes from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img src="https://www.bigstockphoto.com/images/homepage/module-4.jpg" alt=""/>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;