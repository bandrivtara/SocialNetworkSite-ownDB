import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import Photos from './Photos';
import { showPhoto } from '../../redux/PhotosReducer';
import Preloader from '../common/Preloader/Preloader';

class PhotosAPIComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      album: null
    };
    this.setAlbum = this.setAlbum.bind(this)
  }

  componentDidMount() {
    let limitOfPhoto = this.props.photos.limitOfPhoto
    this.props.showPhoto(limitOfPhoto);
  }

  setAlbum(elem) {
    if (elem === this.state.album) {
      this.setState({
        album: null
      })
    } else {
      this.setState({
        album: elem
      });
    }
  }


  render() {
    return (
      <Fragment>
        {this.props.isFetching ? <Preloader /> :
          <Photos state={this.props.photos}
            setAlbum={this.setAlbum}
            album={this.state.album} />}
      </Fragment>
    )
  }
}


let mapStateToProps = (state) => {

  return {
    photos: state.photos,
    isFetching: state.photos.isFetching
  }
}


export default connect(mapStateToProps, { showPhoto })(PhotosAPIComponent);