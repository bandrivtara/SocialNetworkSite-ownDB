import React from 'react';

import Dialogs from './Dialogs';

import {sendMessageActionCreator} from '../../redux/DialogReducer';

import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    
    return {
        dialogs: state.dialog
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => {
            dispatch(sendMessageActionCreator(message));
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);