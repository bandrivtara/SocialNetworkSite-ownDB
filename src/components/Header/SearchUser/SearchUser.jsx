import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from '../Header.module.css';
import DropDownWindow from '../../common/DropDownWindow/DropDownWindow';

const SearchUser = (props) => {
    return (
        <div>
            <div className={classes.search}>
                <input type="text"
                    placeholder="Search here"
                    value={props.filter}
                    onChange={props.setFilter} 
                    onFocus={()=>{props.showDropWindow(true)}}
                    onBlur={()=>{props.showDropWindow(false)}}/>
                <button><FontAwesomeIcon icon="search" /></button>
            </div>
            {props.activeDropDownWindow && <DropDownWindow
                title={"Maybe you search..."}
                items={props.filteredUsers} />}
        </div>
    )
}

export default SearchUser
