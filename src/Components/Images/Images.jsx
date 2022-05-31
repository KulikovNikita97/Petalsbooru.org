import * as axios from 'axios';
import React from 'react';
import s from './Images.module.css';

class Images extends React.Component {

    componentDidMount() {

        axios.get(`https://derpibooru.org/api/v1/json/search/images?q=safe&page=${this.props.currentPage}&per_page=${this.props.pageSize}`)
            .then(response => {
                this.props.setImages(response.data.images);
                // this.props.setTotalImages(response.data.total);
                //отвечает за показ всех страниц
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

        let pagesCount = Math.ceil(this.props.totalImagesCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>

            <div className={s.main_title}>
                Recently added:
            </div>

            <div>
                {pages.map(p => {
                    return (
                        <span className={this.props.currentPage === p && s.selectedPage}
                            onClick={(e) => { this.onPageChanged(p)}}>
                            {p}
                        </span>
                    )
                })}
            </div>



            <div className={s.imageboard}>

                {this.props.images.map(q =>

                    <div key={q}
                        className={s.count_and_image}>

                        <div className={s.count}>

                            <button className={s.button_faves}>
                                {q.faves}
                            </button>

                            <button className={s.button_upvotes}>
                                {q.upvotes}
                            </button>

                            <div className={s.score}>
                                Rating: {q.score}
                            </div>

                            <button className={s.button_downvotes}>
                                {q.downvotes}
                            </button>

                        </div>

                        <div className={s.image}>

                            <img src={q.representations.small} />

                        </div>

                    </div>
                )}
            </div>
        </div>
    }
}

export default Images;