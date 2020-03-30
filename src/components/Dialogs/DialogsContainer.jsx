import React from 'react';

import Dialogs from './Dialogs';

import {updateTextActionCreator, sendMessageActionCreator} from '../../redux/DialogReducer';

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
        updateTextActionCreator: (area) => {
            dispatch(updateTextActionCreator(area));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(Dialogs);