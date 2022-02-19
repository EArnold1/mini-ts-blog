import { FC } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <Navbar.Brand href="#home" className="">
            {' '}
            Read<span className="text-warning">it</span>{' '}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/" className="text-white">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/articles" className="text-white">
                Articles
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/team" className="text-white">
                Team
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="text-white">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
