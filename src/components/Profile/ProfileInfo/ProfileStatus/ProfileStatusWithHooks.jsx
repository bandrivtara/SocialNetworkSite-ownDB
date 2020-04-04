import React, { useEffect, useState } from 'react';

import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
    
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value); 
    }

    return(
        <div>
            {!editMode &&
                <p onClick={activateEditMode}>{props.status || 'No status'}</p>
            }
            {editMode &&
                <input  
                autoFocus
                onChange={onStatusChange} 
                onBlur={deactivateEditMode} 
                className={classes.change} type="text" 
                value={status}/>
            }
        </div> 
    )
}

export default ProfileStatusWithHooks;