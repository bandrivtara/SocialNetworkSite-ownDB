import React from 'react';

import Dialogs from './Dialogs';

import {updateTextActionCreator, sendMessageActionCreator} from '../../redux/DialogReducer';

import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    
    return {
        dialogs: state.dialog,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateTextActionCreator: (area) => {
            dispatch(updateTextActionCreator(area));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;