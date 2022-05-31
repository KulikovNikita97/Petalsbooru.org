import * as axios from 'axios';
import React from 'react';
import s from './Images.module.css';
import { Image } from './Image';

const Images = (props) => {

    if (props.images.length === 0) {

        axios.get('https://derpibooru.org/api/v1/json/search/images?q=safe')
            .then(response => {
                props.setImages(response.data.images);
            })
    }

    return <div>

        <div className={s.main_title}>
            Recently added:
        </div>

        <div className={s.imageboard}>
            {
                props.images.map(q =>
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
                )
            }
        </div>
    </div>
}


export default Images;