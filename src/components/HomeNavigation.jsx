import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NikhilMoreResume from '../../public/NikhilMoreResume.pdf';
function HomeNavigation() {
  return (
    <Navbar expand="lg" className="bg-black navbar-dark py-3 shadow-sm">
      <Container fluid>
        {/* Left: Name/Brand */}
        <Navbar.Brand href="#home" className="text-white text-3xl font-bold ">
          <Link to="/" className="text-white text-3xl font-bold"  style={{textDecoration: 'none'}}>NIKHIL MORE</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        {/* Right: Navigation links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-end">
          <Nav className="gap-7"  style={{textDecoration: 'none'}}>
            <Nav.Link href="#about" className="text-white text-lg about">
              <Link to="/About" className="text-white text-lg"  style={{textDecoration: 'none'}}>
              About
              </Link>
            </Nav.Link>
            <Nav.Link href="#work" className="text-white text-lg">
              <Link to="/Work" className="text-white text-lg"  style={{textDecoration: 'none'}}>
              Work
              </Link>
            
            </Nav.Link>
            <Nav.Link href="#testimonials" className="text-white text-lg">
              <Link to="/Services" className="text-white text-lg"  style={{textDecoration: 'none'}}>Services </Link>
            </Nav.Link>
            
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300">
             <a href={NikhilMoreResume}
             download="Nikhil_More_Resume.pdf"
             style={{ textDecoration: 'none', color: 'inherit',fontWeight: 'bold' }}
             >
              Download Resume
             </a>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

<style>{
  `
  .about: hover{
    color: white;
    text-decoration: underline;
  }
  `
  }</style>
export default HomeNavigation;
