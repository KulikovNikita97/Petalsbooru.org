import * as axios from 'axios';
import React from 'react';
import s from './Images.module.css'

const Images = (props) => {

    if (props.images.length === 0) {

        axios.get('https://derpibooru.org/api/v1/json/images')
            .then(response => {

                props.setImages(response.image);
            })
    }

    return <div>
        
        {
            props.images.map(
                image =>
                    <div key={image}>
                        <span>
                            {image.tags}
                        </span>
                    </div>
            )
        }
    </div>
}


export default Images;