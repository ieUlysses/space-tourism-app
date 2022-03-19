import React from 'react'
import { NavLink } from 'react-router-dom'

import "../../Styles/Text/NavText.css"
import "../../Styles/Navigation/TabNavInner.css"


function TabNavInner(props) {
    return (
        <nav>

            <NavLink to={props.link} >{props.name}</NavLink>

            <div className='nav-wrapper'>


                <NavLink to={props.link}
                    className={({ isActive }) => isActive ? "active nav-text " : " nav-text"}>  {props.name}</NavLink>


            </div>

        </nav>
    )
}

export default TabNavInner