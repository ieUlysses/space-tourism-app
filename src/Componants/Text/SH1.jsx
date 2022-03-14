import React from 'react'

import "../../Styles/Text/SH1.css"

function SH1(props) {
    return (
        <>
            <span className='subHeadingOne'>
                {props.info}
            </span>
        </>
    )
}

export default SH1