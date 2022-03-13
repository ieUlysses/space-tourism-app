import React from 'react'
import ImageHolder from '../Componants/Images/ImageHolder'
import TabNavInner from '../Componants/Navigation/TabNavInner'

import H1 from '../Componants/Text/H1'
import H4 from '../Componants/Text/H4'
import Paragraph from '../Componants/Text/Paragraph'

/* import douglas from "../Media/crew/image-douglas-hurley.png"
import mark from "../Media/crew/image-mark-shuttleworth.png"
import victor from "../Media/crew/image-victor-glover.png" */




function Crew() {

    const destinations = [
        {
            "name": "Moon",
            "images": {
                "png": "./assets/destination/image-moon.png",
                "webp": "./assets/destination/image-moon.webp"
            },
            "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            "distance": "384,400 km",
            "travel": "3 days"
        },
        {
            "name": "Mars",
            "images": {
                "png": "./assets/destination/image-mars.png",
                "webp": "./assets/destination/image-mars.webp"
            },
            "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            "distance": "225 mil. km",
            "travel": "9 months"
        },
        {
            "name": "Europa",
            "images": {
                "png": "./assets/destination/image-europa.png",
                "webp": "./assets/destination/image-europa.webp"
            },
            "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            "distance": "628 mil. km",
            "travel": "3 years"
        },
        {
            "name": "Titan",
            "images": {
                "png": "./assets/destination/image-titan.png",
                "webp": "./assets/destination/image-titan.webp"
            },
            "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            "distance": "1.6 bil. km",
            "travel": "7 years"
        }
    ]

    const navi = [
        {
            link: "/moon",
            id: 1,
            name: "Moon"
        },
        {
            link: "/mars",
            id: 2,
            name: "Mars"
        },
        {
            link: "/europa",
            id: 3,
            name: "Europa"
        },
        {
            link: "/titan",
            id: 4,
            name: "Titan"
        },
    ]


    return (
        <>

            <div>
                {navi.map(navi => (
                    <TabNavInner name={navi.name} key={navi.key} link={navi.link} />
                ))
                }
            </div>

            <div>
                {destinations.map(destination => (<li >
                    {console.log(destination.images.png)}
                    <div>
                        <H1 name={destination.name} />
                        <Paragraph bio={destination.description} />
                        <H4 role={destination.role} />
                        <ImageHolder img={destination.images.png} />
                    </div>
                </li>))
                }
            </div>

        </>
    )
}

export default Crew