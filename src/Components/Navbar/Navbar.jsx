import React from 'react';
import s from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <div>
        <nav className={s.navbar}>

            <div className={s.searchArea}>
                <div>
                    <textarea placeHolder='Search'></textarea>
                </div>
                <div>
                    <button onClick='#'>
                        Search
                    </button>
                </div>
                <div>
                    <button onClick='#'>
                        Upload
                    </button>
                </div>
            </div>

            <div className={s.navigation}>
                <div className={s.menuImages}>
                    <Link to="/images">IMAGES</Link>
                </div>
                <div className={s.menuFeedback}>
                    <Link to="/feedback">FEEDBACK</Link>
                </div>
            </div>
        </nav>
    </div>


}

export default Navbar;