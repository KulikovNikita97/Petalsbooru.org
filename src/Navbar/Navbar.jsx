import React from 'react';
import s from './Navbar.module.css'

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
                <div className={s.imact}>
                    <a href='#'>
                        Images
                    </a>
                </div>
                <div className={s.imact}>
                    <a href='#'>
                        FB
                    </a>
                </div>
            </div>
        </nav>
    </div>


}

export default Navbar;