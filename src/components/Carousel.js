import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Card from './Card'
import gitlogo from '../assets/images/gitlogo.png'
import coding from '../assets/images/coding.png'
import linkedin from '../assets/images/linkedin.png'

class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'LinkedIn',
                    subtitle: 'Connect with me!',
                    imgSrc: linkedin,
                    link: 'https://linkedin.com/in/isaac-posey',
                    selected: false
                },
                {
                    id: 1,
                    title: 'GitHub',
                    subtitle: 'Checkout my work!',
                    imgSrc: gitlogo,
                    link: 'https://github.com/ihposey12',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Medium',
                    subtitle: 'Read my personal/tech blogs!',
                    imgSrc: coding,
                    link: 'https://ihposey.medium.com/',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items]
        items[id].selected = items[id].selected ? false : true
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false
            }
        })
        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel