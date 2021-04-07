import React from 'react'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'

const Homepage = (props) => {
    return(
        <div>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
            <Carousel />
            <p style={{fontWeight: 'bold', textAlign: 'center'}}>*Direct Links to Hosted Projects COMING SOON!*</p>
        </div>
    )
}

export default Homepage