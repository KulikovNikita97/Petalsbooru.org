import React from "react";
import s from './Header.module.css'
import jennaImage from './Jenna.jpg';

const Header = (props) => {
    return <header className={s.header}>

        <nav className={s.leftSide}>
            <a href='/'>
                <img src={jennaImage} alt="" />
                <button className={s.jennabooru}>
                    JENNABOORU
                </button>
            </a>
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
        </nav>

        <nav className={s.rightSide}>
            <div className={s.notificationsArea}>
                <div>
                    <button onClick='#'>
                        Notifications
                    </button>
                </div>
                <div>
                    <button onClick='#'>
                        Messages
                    </button>
                </div>
            </div>
        </nav>

    </header>

}

export default Header;