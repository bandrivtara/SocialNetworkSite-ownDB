import React, { useState } from 'react';
import classes from './FollowersList.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const FollowersList = (props) => {

    const [filter, setFilter] = useState('')

    let filterLower = filter.toLowerCase();
    let handleChange = (e) => {
        setFilter(e.target.value)
    }


    return (
        <div className="modalWindow">
            <div className={classes.panel}>
                <div className={classes.search}>
                    <input type="text" value={filter} onChange={handleChange} />
                    <button><FontAwesomeIcon icon="search" /></button>
                </div>
                <button onClick={() => { props.closeModal() }}>X</button>
            </div>
            <div className={classes.usersBox}>
                <ul>
                    {props.followers.
                        map(elem => {
                            if (elem.name.toLowerCase().includes(filterLower)
                                || elem.last_name.toLowerCase().includes(filterLower)) {
                                return (
                                    <li key={elem.id} className={classes.list_item} key={elem.id}>
                                        <div>{elem.name} {elem.last_name}</div>
                                        <NavLink className={classes.view_profile}
                                            to={'/profile/' + elem.id}
                                            onClick={() => { props.closeModal() }}>View profile</NavLink>
                                    </li>
                                )
                            }
                        })}
                </ul>
            </div>
        </div>
    )
}

export default FollowersList;