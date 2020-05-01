import React from 'react';

import classes from '../Dialogs.module.css';
import MessagesList from './MessagesList/MessagesList';
import SendMessageForm from './SendMessage/SendMessage';

class Messages extends React.Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ block: "nearest" });
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className={classes.messages_container}>
                {this.props.conversants.filter(elem => elem.id === this.props.activeDialog).map(elem => (
                    <div className={classes.conversant}>
                        <img src={elem.avatar} alt="ava" />
                        <h3>{elem.name} {elem.last_name}</h3>
                    </div>
                ))}
                <div className={classes.messages_box}>
                    <div className={classes.messages_list}>
                        <MessagesList 
                        dialogs={this.props.dialogs}
                        activeDialog={this.props.activeDialog}/>
                        <div style={{ float: "left", clear: "both" }}
                            ref={(el) => { this.messagesEnd = el; }}>
                        </div>
                    </div>
                </div>
                <div className={classes.form_box}>
                    { this.props.activeDialog && <SendMessageForm onSubmit={this.props.onSubmit} />}
                </div>
            </div>
        );
    }
}

export default Messages;