import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import action from '../../../store/action/index'

function Header(props) {
    const {
        set_global_lang,
        set_global_language,
    } = props;
    const change_language_to_kr = () => {
        set_global_lang('kr');
        set_global_language();
    }
    const change_language_to_en = () => {
        set_global_lang('en');
        set_global_language();
    }


    return (
        <header>

            <div className="header_logo_container">
                <Link
                    to="/"
                    className="header_logo">
                    <img src="/Logos/oneLine_logo_pink_copy.jpeg" alt="background" className="logo" />
                </Link>
                <div className="language_selector">
                    <button onClick={change_language_to_kr} className="language">KR</button>
                    <button onClick={change_language_to_en} className="language">EN</button>
                </div>
            </div>
            <div className="menu">
                <div className="menu_container">
                    <div className="about">
                        <button className="drop_down_menu menu_button" id="about">
                            About
                        </button>
                        <ul id="hide">
                            <li className="about_drop_down"><Link className='links' to="/details">Detail</Link></li>
                            <li className="about_drop_down"><Link className='links' to="/details">Detail</Link></li>
                            <li className="about_drop_down"><Link className='links' to="/details">Detail</Link></li>
                            <li className="about_drop_down"><Link className='links' to="/details">Detail</Link></li>
                        </ul>
                    </div>
                    <button className="menu_button">Shop</button>
                    <button className="menu_button"><Link className='links' to="/lookbook">lookbook</Link></button>
                    <button className="menu_button">Q & A</button>
                </div>
            </div>

        </header>
    );
}

export default connect(state => ({ ...state.language }), { ...action.language })(Header);
