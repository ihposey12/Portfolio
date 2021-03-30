import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Card from './Card'
import gitlogo from '../assets/images/gitlogo.png'

class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'AirDok',
                    subtitle: 'Fly far, stay cheap',
                    imgSrc: gitlogo,
                    link: 'https://linkedin.com/in/isaac-posey',
                    selected: 'false'
                },
                {
                    id: 1,
                    title: 'Vinylfy',
                    subtitle: 'Buy and sell your favorite Vinyl!',
                    imgSrc: '',
                    link: 'https://github.com/ihposey12',
                    selected: 'false'
                },
                {
                    id: 2,
                    title: 'QuoteTake',
                    subtitle: 'Jot down your favorite quotes!',
                    imgSrc: '',
                    link: 'https://linkedin.com/in/isaac-posey',
                    selected: 'false'
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