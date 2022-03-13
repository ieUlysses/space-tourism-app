import React from 'react'

import { Link, NavLink } from "react-router-dom"
import Logo from "../../Media/shared/logo.svg"


function TabNavMain() {

    const links = [
        { title: "Home", to: "/" },
        { title: "Destinations", to: "/destinations" },
        { title: "Crew", to: "/crew" },
        { title: "Technology", to: "/technology" },

    ]

    return (
        <>
            <nav>
                <Link to="/" role={"Button"}> <img src={Logo} alt="Space-travel's logo. Click here to navigate back to the main menu" /></Link>
                <ul >
                    {links.map(link => (<li >
                        <NavLink to={link.to} >{link.title}</NavLink>
                    </li>))
                    }
                </ul>
            </nav>
        </>
    )
}

export default TabNavMain