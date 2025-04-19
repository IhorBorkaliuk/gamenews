import Container from 'react-bootstrap/Container';
import AuthModal from 'components/Modal/AuthModal';
import RegistrationModal from 'components/Modal/RegModal';
import {
  RegisterButton,
  LoginButton,
  UserProfileContainer,
  UserProfileLink,
} from './NavBarStyled';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenReg, setOpenReg] = useState(false);
  const [login, setLogin] = useState('');

  useEffect(() => {
    const getName = localStorage.getItem('regData');
    if (getName) {
      const { login } = JSON.parse(getName);
      setLogin(login || '');
    } else {
      setLogin('');
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenReg = () => {
    setOpenReg(true);
  };

  const handleClickLogOut = () => {
    setLogin('')
    setIsLoggedIn(false)
  }

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
            <Nav.Link as={NavLink} to="/giveaways">
              Giveaways
            </Nav.Link>
          </Nav>
          {isLoggedIn && login ? (
            <UserProfileContainer>
              <UserProfileLink>Вітаємо, {login}!</UserProfileLink>
            </UserProfileContainer>
          ) : (
            <>
              <LoginButton onClick={handleClickOpen}>Login</LoginButton>
              <RegisterButton onClick={handleClickOpenReg}>
                Sign Up
              </RegisterButton>
            </>
          )}
        </Container>
        {isLoggedIn && (
          <LoginButton onClick={handleClickLogOut}>Logout</LoginButton>
        )}
      </Navbar>
      {isOpen && <AuthModal setOpen={setOpen} setIsLoggedIn={setIsLoggedIn} />}
      {isOpenReg && <RegistrationModal setOpenReg={setOpenReg} />}
    </>
  );
};

export default NavBar;
