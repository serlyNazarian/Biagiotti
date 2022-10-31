import React from "react";
import { useState, useEffect } from "react";
import { FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";
import './HeaderIcons.css';
const HeaderIcons = () => {
    const [menu, setMenu] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setMenu(false);
            }
        })
    }
    )
    const ClickHandler = () => {
        setMenu(!menu);
    }
    return (
        <div className="IconsContainer">
            <FaSearch className="icon" />
            <FaShoppingBag className="icon" />
            <FaBars onClick={ClickHandler} className="icon" />
            {menu && (
                <div className="Icon-Sidebar">
                    <div className="zoom-back"></div>
                </div>
            )
            }
        </div>
    );
};

export default HeaderIcons;
