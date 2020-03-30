import React, { Component } from 'react';

import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    

    state = {
        editMode: false,
        status: this.props.status 
    }
    

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
        console.log(this.state.status)
    }

    onStatusChange(e) {
        this.setState({
            status: e.currentTarget.value
        }); 
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            console.log('test')
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return(
            <div>
                {!this.state.editMode &&
                    <p onClick={this.activateEditMode.bind(this)}>{this.props.status || 'No status'}</p>
                }
                {this.state.editMode &&
                    <input  
                    autoFocus
                    onChange={this.onStatusChange.bind(this)} 
                    onBlur={this.deactivateEditMode.bind(this)} 
                    className={classes.change} type="text" 
                    value={this.state.status}/>
                }
            </div> 
        )
    }
}

export default ProfileStatus;