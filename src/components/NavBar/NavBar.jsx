import Container from 'react-bootstrap/Container';
import AuthModal from 'components/Modal/ModalAuth';
import RegistrationModal from 'components/Modal/ModalReg';
import {
  RegisterButton,
  LoginButton,
  UserProfileContainer,
  UserProfileLink,
} from './NavBarStyled';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = ({ isLoggedIn }) => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenReg, setOpenReg] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenReg = () => {
    setOpenReg(true);
  };
  const getName = localStorage.getItem('data')
  const {login} = JSON.parse(getName)
  console.log(login);

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
          {isLoggedIn ? (
            <UserProfileContainer>
              <UserProfileLink>{login}</UserProfileLink>
            </UserProfileContainer>
          ) : (
            <>
              <LoginButton onClick={handleClickOpen}>Login</LoginButton>
              <RegisterButton onClick={handleClickOpenReg}>
                Sign In
              </RegisterButton>
            </>
          )}
        </Container>
      </Navbar>
      {isOpen && <AuthModal setOpen={setOpen}></AuthModal>}
      {isOpenReg && (
        <RegistrationModal setOpenReg={setOpenReg}></RegistrationModal>
      )}
    </>
  );
};

export default NavBar;
