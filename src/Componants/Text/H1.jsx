import React from 'react'

function H1(props) {
    return (
        <>

            {/* Pass txt info as props from parent.  */}
            <h1>
                {props.name}
            </h1>
        </>
    )
}

export default H1