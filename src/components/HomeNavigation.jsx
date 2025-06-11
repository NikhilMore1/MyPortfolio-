import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function HomeNavigation() {
  return (
    <Navbar expand="lg" className="bg-black navbar-dark py-3 shadow-sm">
      <Container fluid>
        {/* Left: Name/Brand */}
        <Navbar.Brand href="#home" className="text-white text-3xl font-bold ">
          Nikhil More
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        {/* Right: Navigation links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-end">
          <Nav className="gap-4">
            <Nav.Link href="#about" className="text-white text-lg">
              <Link to="/About" className="text-white text-lg">
              About
              </Link>
            </Nav.Link>
            <Nav.Link href="#work" className="text-white text-lg">
              <Link to="/Work" className="text-white text-lg">
              Work
              </Link>
            </Nav.Link>
            <Nav.Link href="#testimonials" className="text-white text-lg">
              Testimonials
            </Nav.Link>
            <Nav.Link href="#contacts" className="text-white text-lg">
              Contacts
            </Nav.Link>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300">
              Download CV
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavigation;
