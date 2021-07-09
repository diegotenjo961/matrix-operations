import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { SiUnrealengine } from 'react-icons/si';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsMoon, BsSun } from 'react-icons/bs';

import navigationItems from '../data/navigationItems';

import "../assets/styles/components/Header.css";

const Header = () => {
    const [darkMood, setDarkMood] = useState(localStorage.getItem("dark-mood"));
    const location = useLocation();

    const handleDarkMood = () => {
        if(darkMood){
            localStorage.setItem("dark-mood", false);
            return setDarkMood(false);
        }
        localStorage.setItem("dark-mood", true);
        setDarkMood(true);
    }

    return(
        <header className={`navigation ${darkMood && "navigation__dark-mood"}`}>
            <Link to="/" className="navigation__logo">matrix</Link>
            <nav className="navigation__items">
                <div>
                    {
                        navigationItems.map(item => {
                            if(item.icon){
                                return (
                                    <a href={item.pathname}
                                            className="navigation__item navigation__item--icon"
                                            key={item.id}
                                            rel="noopener noreferrer"
                                            title="GitHub Repository"
                                            target="_blank">
                                        {item.content}
                                    </a>)
                            }
                            return (
                                <Link to={item.pathname}
                                        className={`navigation__item ${item.pathname === location.pathname && "navigation__item--active"}`}
                                        key={item.id}>
                                    {item.content.toUpperCase()}
                                </Link>
                            )
                        })
                    }
                </div>
                <div>
                    <i  className="navigation__item navigation__item--icon"
                        onClick={handleDarkMood}>
                        {darkMood ?  <BsMoon /> : <BsSun />}
                    </i>
                    <i className="navigation__item navigation__item--icon language__drop-down">
                        <SiUnrealengine />
                        <IoMdArrowDropdown />
                    </i>
                </div>
            </nav>
        </header>
    )
}

export default Header;