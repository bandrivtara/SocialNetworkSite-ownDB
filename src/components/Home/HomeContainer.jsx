import React from 'react';
import { connect } from 'react-redux';

import Home from './Home';
import { showPhoto } from '../../redux/PhotosReducer';


class HomeContainer extends React.Component {

    getProfile() {
        let logUserId = this.props.logUserId;
        this.props.showPhoto();
    }

    componentDidMount() {
        this.getProfile();
    }

    render() {
        return (
            <div>
                <Home photos={this.props.photos} />
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    logUserId: state.auth.userId,
    photos: state.photos,
})

export default connect(mapStateToProps, { showPhoto })(HomeContainer);