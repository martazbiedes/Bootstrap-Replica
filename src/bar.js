import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Button} from 'react-bootstrap'
import { Container } from 'react-bootstrap'

const TopBar = () => {
    return (

        <Navbar bg="light" expand="lg" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Container>

            <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                <img 
                src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" 
                className='d-inline-block alighn-top'
                /> 
            </Navbar.Brand>
                <div>
                    <Nav.Link href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>{' '}
                </div>
            </Container>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
    )
}

export default TopBar