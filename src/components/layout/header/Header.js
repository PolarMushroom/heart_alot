import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>

            <div class="header_logo_container">
                <Link
                    to="/"
                    className="header_logo">
                    <img src="/Logos/oneLine_logo_pink_copy.jpeg" alt="background" class="logo" />
                </Link>
            </div>
            <div class="menu">
                <div class="menu_container">
                    <button class="drop_down_menu" id="about">
                        About
                        <ul>
                            <li> <Link to="/details">Detail</Link></li>
                        </ul>


                    </button>

                    <li>Shop</li>
                    <li>Look Book</li>
                    <li>Q & A</li>
                </div>
            </div>

        </header>
    );
}

export default Header;
