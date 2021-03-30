import React from 'react'
import { useSpring, animated } from 'react-spring'

const CardInfo = (props) => {

    const style = useSpring({opacity: 1, from: {opacity: 0}})

    return(
        <div>
            <animated.div className='hp-card-info' style={style}>
                <p className='hp-card-title'>{props.title}</p>
                <p className='hp-card-subtitle'>{props.subtitle}</p>
                <a href={props.link} target='_blank' rel='noopener noreferrer'>View</a>
            </animated.div>
        </div>
    )
}

export default CardInfo