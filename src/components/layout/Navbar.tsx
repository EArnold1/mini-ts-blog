import { FC } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent: FC = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="secondary"
      variant="dark"
      fixed="top"
      className="navbar"
    >
      <Container>
        <Navbar.Brand href="#home" className="">
          Read<span className="text-warning">it</span>{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features" className="">
              Home
            </Nav.Link>
            <Nav.Link href="#pricing" className="">
              Articles
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#deets" className="">
              Team
            </Nav.Link>
            <Nav.Link href="#memes" className="">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
