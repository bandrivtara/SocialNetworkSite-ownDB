import React, { useEffect, useRef } from 'react';

import classes from '../Dialogs.module.css';

class Messages extends React.Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ block: "nearest" });
    }


    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className={classes.messages_list}>
                <div className={classes.messages_list}>
                    {this.props.dialogs.filter(elem => elem.conversantId === this.props.activeDialog).map(elem => {
                        return (
                            elem.dialogs.map(elem => {
                                return (
                                    <div key={elem.id} className={`${classes.message} ${elem.outgoing ? classes.my_message : classes.conversant_message}`}>
                                        <p>
                                            {elem.dialogText}
                                        </p>
                                    </div>
                                )
                            }))
                    })}
                </div>
                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>

        );
    }
}

export default Messages;