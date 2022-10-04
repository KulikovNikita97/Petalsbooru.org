import React from 'react';
import s from '../Images.module.css';

let Profile = (props) => {
    return (
        <div className={s.profile}>

            {props.images.map(q =>

                <div key={q}>
                    <img src={q.representations.large} />
                </div>

            )}

        </div>
    )
}

export default Profile;