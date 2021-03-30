import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Hunter Posey',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Never Stop Learning',
        subtitle: 'Do What You Love',
        text: 'Check Me Out Below!'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact Me'
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Container className='p-0' fluid={true}>
            <Navbar className='border-bottom' bg='transparent' expand='lg'>
              <Navbar.Brand className='top-left-name'><u>ISAAC HUNTER POSEY</u></Navbar.Brand>
              <Navbar.Toggle aria-controls='navbar-toggle' />
              <Navbar.Collapse id='navbar-toggle'>
                <Nav className='ml-auto'>
                  <Link className='nav-link' to='/'>
                    Home
                  </Link>
                  <Link className='nav-link' to='/about'>
                    About
                  </Link>
                  <Link className='nav-link' to='/contact'>
                    Contact
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Route path='/' exact render={() => <Homepage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
            <Route path='/about' exact render={() => <About title={this.state.about.title} />} />
            <Route path='/contact' exact render={() => <Contact title={this.state.contact.title} />} />
            <Footer />
          </Container>
        </Router>
      </div>
    );
  }
}

export default App
