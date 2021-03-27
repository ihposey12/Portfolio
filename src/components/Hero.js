import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'

const Hero = (props) => {
    return(
        <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
            <Container fluid={true}>
                <Row className='justify-content-center py-5'>
                    <Col md={8} sm={12}>
                        {props.title && <h1 className='display-1 font-weight-bolder'>{props.title}</h1>}
                        {props.subtitle && <h2 className='display-4 font-weight-light'>{props.subtitle}</h2>}
                        {props.text && <h2 className='lead font-weight-light'>{props.text}</h2>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero