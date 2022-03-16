import { React, useState } from 'react'

import { Link, NavLink } from "react-router-dom"
import Logo from "../../Media/shared/logo.svg"

import Burger from "../../Media/shared/icon-hamburger.svg"
import Close from "../../Media/shared/icon-close.svg"

import "../../Styles/Navigation/TabNavMain.css"
import "../../Styles/Text/NavText.css"

function TabNavMain() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen((value) => !value);

    const links = [
        { title: "HOME", to: "/", key: "00" },
        { title: "DESTINATIONS", to: "/destinations", key: "01" },
        { title: "CREW", to: "/crew", key: "02" },
        { title: "TECHNOLOGY", to: "/technology", key: "03" },
    ]

    return (
        <>
            <nav className='nav-main'>
                <Link to="/" role={"Button"} className="nav-brand"> <img src={Logo} alt="Space-travel's logo. Click here to navigate back to the main menu" /></Link>

                <div className='nav-wrapper'>


                    {links.map(link => (
                        //Styling rules for interactive nav
                        <NavLink to={link.to}
                            className={({ isActive }) => isActive ? "active nav-text " : " nav-text"}> {link.key} {link.title}</NavLink>
                    ))
                    }

                </div>

                <button className="burger-menu" onClick={toggleOpen}>
                    <img
                        src={isOpen ? Close : Burger}
                        alt="Click here to open the navigation menu"
                    />
                </button>

            </nav>

            <div className={
                isOpen
                    ? "nav-menu-container-expanded"
                    : "nav-menu-container-collapsed"
            }>

                <ul className='nav-menu'>
                    {links.map(link => (
                        //Styling rules for interactive nav
                        <NavLink to={link.to} /* className={({ isActive }) => isActive ? "red" : "blue"} */>{link.title}</NavLink>
                    ))
                    }
                </ul>
            </div>
        </>
    )
}

export default TabNavMain