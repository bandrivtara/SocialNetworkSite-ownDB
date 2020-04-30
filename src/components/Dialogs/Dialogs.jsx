import React, { useEffect, useRef } from 'react';

import classes from './Dialogs.module.css';

import Messages from './Messages/Messages';


const Dialogs = (props) => {


    return (
        <div className={classes.dialogs}>
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

            <Messages dialogs={props.dialogs} activeDialog={props.activeDialog} 
                        conversants={props.conversants}
                        onSubmit={props.onSubmit}/>

        </div>
    );
}

export default Dialogs;