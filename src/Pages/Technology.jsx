import React from 'react'
import ImageHolder from '../Componants/Images/ImageHolder'
import SlideNavNum from '../Componants/Navigation/SlideNavNum'
import H1 from '../Componants/Text/H1'
import Paragraph from '../Componants/Text/Paragraph'

import Launch from "../Media/technology/image-launch-vehicle-portrait.jpg"
import SpacePort from "../Media/technology/image-spaceport-portrait.jpg"
import SpaceCapsule from "../Media/technology/image-space-capsule-portrait.jpg"


function Technology() {



    const technologies = [
        {
            "name": "Launch vehicle",
            image: Launch,
            "images": {
                "portrait": "../Media/technology/image-launch-vehicle-portrait.jpg",
                "landscape": "../Media/technology/image-launch-vehicle-landscape.jpg"
            },
            "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            "name": "Spaceport",
            image: SpacePort,
            "images": {
                "portrait": "../Media/technology/image-spaceport-portrait.jpg",
                "landscape": "../Media/technology/image-spaceport-landscape.jpg"
            },
            "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            "name": "Space capsule",
            image: SpaceCapsule,
            "images": {
                "portrait": "../Media/technology/image-space-capsule-portrait.jpg",
                "landscape": "../Media/technology/image-space-capsule-landscape.jpg"
            },
            "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]

    const navi = [
        {
            link: "/launch-vehicle",
            number: "1",
            name: "Launch Vehicle"
        },
        {
            link: "/space-port",
            number: "2",
            name: "SpacePort"
        },
        {
            link: "/space-capsule",
            number: "3",
            name: "Space Capsule"
        },
    ]



    return (
        <>

            <div>
                {navi.map(navi => (
                    <SlideNavNum name={navi.name} number={navi.number} link={navi.link} />
                ))
                }
            </div>

            <div>
                {technologies.map(technology => (

                    <div>
                        <H1 name={technology.name} />
                        <Paragraph bio={technology.description} />
                        <img src={technology.image} alt={technology.images.portrait} />
                    </div>
                ))
                }
            </div>

        </>
    )
}

export default Technology