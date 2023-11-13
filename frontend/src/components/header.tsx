import { Navbar, Container,Nav } from "react-bootstrap";
import './header.css'
const Header = () => {
  return (
    <Navbar className="navbar">
      <Container fluid='xxl'>
             <Navbar.Brand className="Title">Ecommerce</Navbar.Brand>
      </Container >
    <Nav>
     <a href="/cart" className="nav-link">Cart</a>
     <a href="/signin" className="nav-link">Sign in</a>
    </Nav>
    </Navbar>
  );

};

export default Header;
