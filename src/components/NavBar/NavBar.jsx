import Container from 'react-bootstrap/Container';
import AuthModal from 'components/Modal/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true)
  }
  
      const handleClickClose = () => {
        setOpen(false);
      };
    console.log(isOpen);
  return (
    <>
      <Navbar bg="dark" variant="dark" className="rounded">
        <Container>
          <NavLink to="/" className="navbar-brand">
            News
          </NavLink>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/games">
              Catalog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/reviews">
              Reviews
            </Nav.Link>
            <Nav.Link as={NavLink} to="/giveaways">
              Giveaways
            </Nav.Link>
          </Nav>
        </Container>
        <button onClick={handleClickOpen}>Login</button>
      </Navbar>
      {isOpen && <AuthModal handleClickClose={handleClickClose}></AuthModal>}
    </>
  );
};

export default NavBar;
