import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setTotalImagesAC, setCurrentPageAC, setImagesAC } from '../../redux/imagesReducer';
import Images from './Images'

class ImagesContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://derpibooru.org/api/v1/json/search/images?q=safe&page=${this.props.currentPage}&per_page=${this.props.pageSize}`)
            .then(response => {
                this.props.setImages(response.data.images);
                this.props.setTotalImages(response.data.total);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://derpibooru.org/api/v1/json/search/images?q=safe&page=${pageNumber}&per_page=${this.props.pageSize}`)
            .then(response => {
                this.props.setImages(response.data.images);
            })
    }


    render() {

        return <Images 
            totalImagesCount={this.props.totalImagesCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            images={this.props.images} />
    }
}

let mapStateToProps = (state) => {
    return {
        images: state.imagesPage.images,
        pageSize: state.imagesPage.pageSize,
        totalImagesCount: state.imagesPage.totalImagesCount,
        currentPage: state.imagesPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setImages: (images) => {
            dispatch(setImagesAC(images))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalImages: (total) => {
            dispatch(setTotalImagesAC(total))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer);