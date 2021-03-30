import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'

const About = (props) => {
    return(
        <div className='about'>
            <Hero title={props.title} />
            <Content>
                <p>When I was young, computers were my world, my escape. 
                    In my eyes, having a computer meant that I could do 
                    just about anything. Much of my childhood was directed 
                    towards messing around with my PC. From the hardware to the 
                    software, I wanted to know the inside and out. I would play World of Warcraft 
                    by day and teach myself C# and JavaScript by night. Growing up in a very small town,  
                    the interest in computers were small, and so were the resources. I no longer believed that 
                    I could make a future with this thing I loved so much.
                </p>

                <p>In college, I decided to pursue a degree in Geography and Environmental Science,
                    with every intention to go on to pursue a J.D. for Environmental Law. Within my chosen major,
                    I found myself constantly using technology and software(ESRI, arcGIS) for projects, problem solving, etc.
                    I began to fall deeper in love with technology than ever before. Knowing I was to far in to change my major,
                    I decided to take a few CS classes. Those classes inevitably cemented my love for programming and that decision 
                    sticks with me to do this day.
                </p>

                <p>Upon graduating, Covid struck and I was left with little options. After many long nights
                    of thinking and tons of encouragement from my peers, I decided to pursue a lifelong dream 
                    and find the silver lining in this very unfortunate time. I took 5 months to myself to learn 
                    as much as I could for programming, filling in the gaps. I decided to immerse myself as much as 
                    possible into this new world. I moved from Aspen, Colorado to Mountain View, California and enrolled 
                    in a Coding Bootcamp.
                </p>

                <p>From a long a hard journey, I am finally in a place that I feel like I fit in. A place of constant
                    learning, decisions, problem solving and hard work. A place to be truly creative and give back to the
                    world in so many ways. I am proud to have the knowledge and skills to learn to give this industry everything
                    that I have for as a long as I possibly can. I am fully committed to my passion and I hope to have the chance
                    to prove that.
                </p>
            </Content>
        </div>
    )
}

export default About