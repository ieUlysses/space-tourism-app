import React from 'react'



function ImageHolder(props) {

    console.log(props.photo, `${props.name}`)


    return (
        <>
            <img src={`props.photo.${props.name}`} alt={props.name} />

        </>
    )
}

export default ImageHolder