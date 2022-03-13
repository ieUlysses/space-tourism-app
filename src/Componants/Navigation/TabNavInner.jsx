import React from 'react'
import { NavLink } from 'react-router-dom'



function TabNavInner(props) {
    return (
        <nav>

            <NavLink to={props.link} >{props.name}</NavLink>

        </nav>
    )
}

export default TabNavInner