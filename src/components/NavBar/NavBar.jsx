import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="rounded">
        <Container>
          <NavLink to="/" className="navbar-brand">
            Новини
          </NavLink>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/games">
              Каталог
            </Nav.Link>
            <Nav.Link as={NavLink} to="/reviews">
              Рецензії
            </Nav.Link>
            <Nav.Link as={NavLink} to="/giveaways">
              Giveaways
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
