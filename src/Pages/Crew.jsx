import React from 'react'
import ImageHolder from '../Componants/Images/ImageHolder'

import SlideNavDot from '../Componants/Navigation/SlideNavDot'
import H1 from '../Componants/Text/H1'
import H4 from '../Componants/Text/H4'
import Paragraph from '../Componants/Text/Paragraph'

import douglas from "../Media/crew/image-douglas-hurley.png"
import mark from "../Media/crew/image-mark-shuttleworth.png"
import victor from "../Media/crew/image-victor-glover.png"
import anousheh from "../Media/crew/image-anousheh-ansari.png"





function Crew() {

    const members = [
        {
            "name": "Douglas Hurley",
            image: douglas,
            "images": {
                "png": "../../Media/crew/image-douglas-hurley.png",
                "webp": "../Media/crew/image-douglas-hurley.webp",

            },
            "role": "Commander",
            "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            "name": "Mark Shuttleworth",
            image: mark,
            "images": {
                "png": "../../Media/crew/image-mark-shuttleworth.png",
                "webp": "../Media/crew/image-mark-shuttleworth.webp",

            },
            "role": "Mission Specialist",
            "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            "name": "Victor Glover",
            image: victor,
            "images": {
                "png": "../../Media/crew/image-victor-glover.png",
                "webp": "../Media/crew/image-victor-glover.webp",

            },
            "role": "Pilot",
            "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            "name": "Anousheh Ansari",
            image: anousheh,
            "images": {
                "png": "../../Media/crew/image-anousheh-ansari.png",
                "webp": "../Media/crew/image-anousheh-ansari.webp",

            },
            "role": "Flight Engineer",
            "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }]

    const navi = [
        {
            link: "/douglas-hurley",
            number: "1",
            name: "Douglas Hurley"
        },
        {
            link: "/mark-shuttleworth",
            number: "2",
            name: "Mark Shuttleworth"
        },
        {
            link: "/victor-glover",
            number: "3",
            name: "Victor Glover"
        },
        {
            link: "/anousheh-ansari",
            number: "4",
            name: "Anousheh Ansari"
        },
    ]



    return (
        <>

            {members.map(member => (
                < div >
                    <H1 name={member.name} />
                    <Paragraph bio={member.bio} />
                    <H4 role={member.role} />
                    <img src={member.image} alt={`here's an image of ${member.name} who acts as the ${member.role} for the mission`} />
                </div>
            ))
            }

            {navi.map(navi => (
                <SlideNavDot name={navi.name} number={navi.number} link={navi.link} />
            ))
            }

        </>
    )
}

export default Crew