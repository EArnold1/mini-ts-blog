import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent: FC = () => {
  return (
    <Navbar
      collapseOnSelect={true}
      expand="lg"
      bg="secondary"
      variant="dark"
      fixed="top"
      className="navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="">
          {' '}
          Read<span className="text-warning">it</span>{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link eventKey={2} as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/articles">
              Articles
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link eventKey={2} as={Link} to="/team">
              Team
            </Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
