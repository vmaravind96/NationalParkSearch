import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Navbar.Brand className='ps-1'>Enjoy The Outdoors</Navbar.Brand>
            <Nav className="me-auto">
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/nationalParks">
                    <Nav.Link>National Parks</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/mountains">
                    <Nav.Link>Mountains</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    )

}

export default Navigation;