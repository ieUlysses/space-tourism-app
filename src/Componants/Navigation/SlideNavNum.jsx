import React from 'react'
import { NavLink } from 'react-router-dom'

function SlideNavNum(props) {
    console.log(props.number)
    return (
        <>
            <NavLink to={props.link} >{props.number}</NavLink>
        </>
    )
}

export default SlideNavNum