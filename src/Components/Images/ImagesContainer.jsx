import React from 'react';
import Images from './Images';
import { connect } from 'react-redux';
import { setImagesAC } from '../../redux/imagesReducer';

let mapStateToProps = (state) => {
    return {
        images: state.imagesPage.images
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setImages: (images) => {
            dispatch(setImagesAC(images))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);