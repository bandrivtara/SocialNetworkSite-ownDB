import React from 'react';

import Dialogs from './Dialogs';

import StoreContex from '../../storeContex';

import {updateTextActionCreator, sendMessageActionCreator} from '../../redux/DialogReducer';

const DialogsContainer = (props) => {

    return (
        <StoreContex.Consumer> 
            {
            (store) => {
                let state = store.getState().dialog;

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }
            
                let updateText = (area) => {
                    store.dispatch(updateTextActionCreator(area));
                }
            return (
            <Dialogs updateTextActionCreator={updateText} sendMessage={sendMessage}
                    dialogs={state}
            />

            )}
        }
        </StoreContex.Consumer>
    );
}

export default DialogsContainer;