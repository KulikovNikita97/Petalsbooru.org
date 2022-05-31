import React from 'react';
import Images from './Images';
import { connect } from 'react-redux';
import { setTotalImagesAC, setCurrentPageAC, setImagesAC } from '../../redux/imagesReducer';

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

export default connect(mapStateToProps, mapDispatchToProps)(Images);