import React from 'react';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import s from './Images.module.css';
import { NavLink } from 'react-router-dom';

let Images = (props) => {
    
    return <div>

        {/* <div className={s.main_title}>
            Recently added:
        </div> */}

        <div className={s.paginator}>
            <Pagination
                defaultCurrent={1}
                total={props.totalImagesCount}
                onChange={props.onPageChanged}
            />
        </div>

        <div className={s.imageboard}>

            {props.images.map(q =>

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
                        <NavLink to={`/image/${q.id}`}
                            onClick={() => { localStorage.setItem('id', q.id) }}>
                            <img src={q.representations.small} />
                        </NavLink>
                    </div>

                </div>
            )}
        </div>
    </div>
}

export default Images;