import React from 'react';

import classes from './Friends.module.css';

const Friends = (props) => {

    let friendsElement = props.store.map((elem)=><FriendsItem name={elem.name}/>);

    return (
        <div>
            {friendsElement}
        </div>
            
    )
}

const FriendsItem = (props) => {
    return (
        <div className={classes.friendItem}>
            <h4>{props.name}</h4>
            <img src="https://images.pexels.com/photos/556667/pexels-photo-556667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        </div>
    )
}

export default Friends;