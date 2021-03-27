import React from 'react'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'

const Homepage = (props) => {
    return(
        <div>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
            <Carousel />
        </div>
    )
}

export default Homepage