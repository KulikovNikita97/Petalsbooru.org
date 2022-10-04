import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setTotalImages, setCurrentPage, setImages, toggleIsFetching } from '../../redux/imagesReducer';
import Images from './Images';
import { Preloader } from '../Common/Preloader/Preloader';

class ImagesContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);//preloader
        axios.get(`https://derpibooru.org/api/v1/json/search/images?q=safe&page=${this.props.currentPage}&per_page=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setImages(response.data.images);
                this.props.setTotalImages(response.data.total);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://derpibooru.org/api/v1/json/search/images?q=safe&page=${pageNumber}&per_page=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setImages(response.data.images);
            })
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}

            <Images
                totalImagesCount={this.props.totalImagesCount}//общее количество картинок с сервера
                pageSize={this.props.pageSize}//количество отображаемых картинок на страницу
                currentPage={this.props.currentPage}//текущая страница
                onPageChanged={this.onPageChanged}//что происходит на смену страницы
                images={this.props.images}//все картинки с сервера
            />

        </>
    }
}

const mapStateToProps = (state) => {
    return {
        images: state.imagesPage.images,
        pageSize: state.imagesPage.pageSize,
        totalImagesCount: state.imagesPage.totalImagesCount,
        currentPage: state.imagesPage.currentPage,
        isFetching: state.imagesPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         setImages: (images) => {
//             dispatch(setImagesAC(images))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalImages: (total) => {
//             dispatch(setTotalImagesAC(total))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, { setImages, setCurrentPage, setTotalImages, toggleIsFetching })
    (ImagesContainer);