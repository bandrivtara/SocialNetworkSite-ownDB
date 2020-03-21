import React from 'react';
import classes from './Users.module.css';


const Users = (props) => {
    return (
        <div>

            {props.users.map(e => 
                <div>
                    <span>
                        <div className={classes.img}>Image</div>
                        <div>
                            {e.followed ? <button>Unfollow</button> : <button>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{e.fullname}</div>
                            <div>{e.status}</div>
                        </span>
                        <span>
                            <div>{e.location.city}</div>
                            <div>{e.location.country}</div>
                        </span>
                    </span>
                </div>
            )}

        </div>
    )
}

export default Users;