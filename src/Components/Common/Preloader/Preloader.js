import React from 'react';
import s from './Preloader.module.css';
import preloader from './pippbuzzes2.gif';


export const Preloader = (props) => {
    return <div className={s.preloader}>
        <img src={preloader} />
    </div>
}