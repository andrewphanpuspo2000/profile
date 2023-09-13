
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header=()=>{
   
    return (
        <Navbar expand="lg" className="bg-dark opacity-75" variant='dark'>
        <Container>
          <Navbar.Brand href="#home">Andrew Phan Puspo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Profile</Nav.Link>
              <Nav.Link href="#link">Skills</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
               
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}