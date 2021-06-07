import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import emailjs from 'emailjs-com'

const Contact = (props) => {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: '',
    //         email: '',
    //         subject: '',
    //         message: ''
    //     }
    // }

    // handleChange = (e) => {
    //     const target = e.target
    //     const value = target.type === 'checkbox' ? target.checked : target.value
    //     const name = target.name
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.setState({
    //         disabled: true,
    //         emailSent: false
    //     })
    //     Axios.post('http://localhost:3001/api/email', this.state)
    //         .then(res => {
    //             if(res.data.success) {
    //                 this.setState({
    //                     disabled: false,
    //                     emailSent: true
    //                 })
    //             } else {
    //                 this.setState({
    //                     disabled: false,
    //                     emailSent: false
    //                 })
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             this.setState({
    //                 disabled: false,
    //                 emailSent: false
    //             })
    //         })
    // }

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            "personal_website",
            "template_u02gyww",
            e.target,
            "user_I4s4EXK3Tu2REFIxZuCu0"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
          e.target.reset()
    }

    const handleClick = () => {
        alert('Your Email has been sent!')
    }

        return(
            <div className='contact'>
                <Hero title={props.title} />
                <Content>
                    <Form onSubmit={sendEmail}>
                        <Form.Group>
                            <Form.Label htmlFor='full-name'>Full Name</Form.Label>
                            <Form.Control id='fullname' name='name' type='text' />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='email'>Email</Form.Label>
                            <Form.Control id='email' name='email' type='email' />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='subject'>Subject</Form.Label>
                            <Form.Control id='subject' name='subject' type='text' />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='message'>Message</Form.Label>
                            <Form.Control id='message' name='message' as='textarea' rows='4' />
                        </Form.Group>

                        <Button className='d-inline-block' variant='primary' type='submit' value='Send' onClick={handleClick}>
                            Send
                        </Button>
                    </Form>
                </Content>
                <br />
                <p>* Emails go Directly to <b>MY</b> email, where I can reply. *</p>
            </div>
        )
    }

export default Contact