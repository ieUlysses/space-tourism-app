import React from 'react'

import "../../Styles/Text/Paragraph.css"

function Paragraph(props) {
    return (
        <>

            <p className='paragraph'>{props.text}</p>

        </>
    )
}

export default Paragraph