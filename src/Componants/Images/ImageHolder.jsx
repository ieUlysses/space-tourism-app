import React from 'react'

import nous from "../../Media/crew/image-anousheh-ansari.png"


function ImageHolder() {
    return (
        <>
            {/* Pass image info as props from parent. import alt text , src, etc */}
            <img src={nous} alt="test image" /* srcset="" */ />

        </>
    )
}

export default ImageHolder