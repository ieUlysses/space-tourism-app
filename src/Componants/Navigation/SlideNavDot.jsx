import React from 'react'
import { NavLink } from 'react-router-dom'





function SlideNavDot(props) {
    console.log(props.number)
    return (
        <>
            <NavLink to={props.link} >{props.number}</NavLink>
        </>
    )
}

export default SlideNavDot