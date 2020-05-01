import React from 'react';

import PhotosBar from './PhotosBar';


class PhotosBarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countPhotos: null,
            actualPhoto: [],
            portionNumber: 4,
            minIndexPhoto: 1,
            maxIndexPhoto: 4,
        }
        this.paginator = this.paginator.bind(this);
        this.getMore = this.getMore.bind(this);
    }

    paginator() {
        let min = this.state.minIndexPhoto;
        let max = this.state.maxIndexPhoto;
        let paginatedPhotos = this.props.photos.photos.adress.filter(elem => elem.id >= min && elem.id <= max)
        this.setState({
            actualPhoto: paginatedPhotos,
            countPhotos: this.props.photos.photos.adress.length
        })
    }

    getMore() {
        let portionNumber = this.state.portionNumber;
        if (this.state.countPhotos > this.state.maxIndexPhoto) {
            this.setState({
                minIndexPhoto: this.state.minIndexPhoto + portionNumber,
                maxIndexPhoto: this.state.maxIndexPhoto + portionNumber,
            }, () => { this.paginator() })
        } else {
            this.setState({
                minIndexPhoto: 1,
                maxIndexPhoto: portionNumber,
            }, () => { this.paginator() })
        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.photos !== prevProps.photos) {
            this.paginator();
        }
    }

    render() {
        return (
            <PhotosBar
                photos={this.state.actualPhoto}
                getMore={this.getMore} />
        )
    }
}

export default PhotosBarContainer;