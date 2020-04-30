import React from 'react';

import Dialogs from './Dialogs';

import { getAllDialogs, sendMessage, getUsers } from '../../redux/DialogReducer';

import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class DialogsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogs: [],
            conversants: [],
            activeDialog: 1
        }
        this.setDialog = this.setDialog.bind(this)
    }

    setDialog(conversantId) {
        this.setState({
            activeDialog: conversantId
        })
    }
    
    refreshDialogs() {
        this.props.getAllDialogs();
        this.props.getUsers();
    }
    
    setConversants() {
        let activeUserDialogs = this.props.dialogs.map(elem => (elem.conversantId))
        function filterByUsers(item) {
            for (let i = 0; i < activeUserDialogs.length; i++) {
                if (item.id === activeUserDialogs[i]) { return true }
            }
        }
        this.setState({
            conversants: this.props.users.filter(filterByUsers),
            activeDialog: activeUserDialogs[0]
        })
    }
    
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setConversants()
        }
    }
    
    componentDidMount() {
        this.refreshDialogs();
    }
    
    render() {
        console.log(this.state.activeDialog)
        return (
            <Dialogs 
            conversants={this.state.conversants} 
            setDialog={this.setDialog}
            activeDialog={this.state.activeDialog}
            dialogs={this.props.dialogs}/>
            )
        }
    }
    
    
let mapStateToProps = (state) => {

    return {
        dialogs: state.dialog.dialogs,
        users: state.dialog.users
    }
}



export default compose(
    connect(mapStateToProps, { getAllDialogs, sendMessage, getUsers }),
    // withAuthRedirect
)(DialogsContainer);