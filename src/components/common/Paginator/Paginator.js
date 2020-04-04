import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Paginator.module.css';

import photoFile from '../../../assets/images/preloader.svg';

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return (
                    <span
                        className={props.currentPage === p && classes.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                )
            })}
        </div>
    )
}

export default Paginator;