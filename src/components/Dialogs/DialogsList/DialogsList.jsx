import React from 'react';

import classes from '../Dialogs.module.css';

const DialogsList = (props) => {

    return (
        <div className={classes.dialogs_container}>
            <h3>Messages</h3>
            <div className={classes.dialogs_list}>
                <div className={classes.search_dialog}></div>
                <div className={classes.dialogs_box}>
                    {props.conversants.map(elem => {
                        return (
                            <div key={elem.id}
                                className={`${classes.dialog} + " " + ${elem.id === props.activeDialog && classes.active_dialog}`}
                                onClick={() => { props.setDialog(elem.id) }}>
                                <img src={elem.avatar} alt="ava" />
                                <h3>{elem.name} {elem.last_name}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default DialogsList;