import React from 'react';
import s from '../Images.module.css';

let Profile = (props) => {
    
    return <div>
        <div className={s.imageboard}>

            <div className={s.count_and_image}>

                <div className={s.count}>

                    <button className={s.button_faves}>
                        {props?.images?.image.faves}
                    </button>

                    <button className={s.button_upvotes}>
                        {props?.images?.image.upvotes}
                    </button>

                    <div className={s.score}>
                        Rating: {props?.images?.image.score}
                    </div>

                    <button className={s.button_downvotes}>
                        {props?.images?.image.downvotes}
                    </button>

                </div>
                <div className={s.image}>

                    <img src={props?.images?.image.representations.medium} />

                </div>
                <div className={s.score}>
                    {props?.images?.image.tags.map(q =>
                        <div page={q}>
                            {q}
                        </div>
                    )}
                </div>

            </div>
        </div>




    </div>
}

export default Profile;