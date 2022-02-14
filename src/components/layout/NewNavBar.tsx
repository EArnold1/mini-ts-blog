import { FC } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NewNavBar: FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          Read<span className="text-warning">it</span>{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Articles</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#deets">Team</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NewNavBar;
