import React, { Component } from 'react';

import { connect } from 'react-redux';
import Photos from './Photos';
import { showPhoto } from '../../redux/PhotosReducer';

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
      this.setState ({
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
      <Photos state={this.props.photos}
        setAlbum={this.setAlbum}
        album={this.state.album} />
    )
  }
}


let mapStateToProps = (state) => {

  return {
    photos: state.photos
  }
}


export default connect(mapStateToProps, { showPhoto })(PhotosAPIComponent);