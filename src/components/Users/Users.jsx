import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/noUser.png'


class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

        render() {
        return (
            <div>
                {this.props.users.map(e => 
                    <div>
                        <span>
                            <div className={classes.img}><img src={ e.photos.small != null ? e.photos.small : userPhoto} alt=""/></div>
                            <div>
                                {e.followed 
                                ? <button onClick={() => {this.props.unfollow(e.id)}}>Unfollow</button> 
                                : <button onClick={() => {this.props.follow(e.id)}}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{e.name}</div>
                                <div>{e.status}</div>
                            </span>
                            <span>
                                <div>{'Ukraine'}</div>
                                <div>{'Ukraine'}</div>
                            </span>
                        </span>
                    </div>
                )}
    
            </div>
        )
    }
}

export default Users;