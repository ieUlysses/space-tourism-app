import React from 'react'

import "../../Styles/Text/H3.css"

function H3(props) {


    return (
        <>
            <span className='headingThree'>
                {props.name}
            </span>
        </>
    )
}

export default H3