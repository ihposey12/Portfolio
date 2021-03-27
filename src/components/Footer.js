import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return(
        <footer className='mt-5'>
            <Container fluid={true}>
                <Row className='border-top justify-content-between p-3'>
                    <Col className='p-0' md={3} sm={12}>
                        Hunter Posey
                    </Col>
                    <Col className='p-0 d-flex justify-content-end' md={3}>
                        This Site Was Made By Hunter Posey
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer