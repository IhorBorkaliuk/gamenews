// NavBarStyled.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Navbar as BootstrapNavbar,
  Nav as BootstrapNav,
} from 'react-bootstrap';

// Стилізований контейнер для профілю користувача
export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; /* Вирівнює профіль користувача праворуч */
`;

// Стилізоване посилання для профілю користувача
export const UserProfileLink = styled(Link)`
  color: #ffffff; /* Колір тексту */
  text-decoration: none; /* Без підкреслення */
  font-size: 16px; /* Розмір шрифту */
  font-weight: bold; /* Жирний шрифт */
  margin: 0 15px; /* Зовнішні відступи */

  &:hover {
    color: #cccccc; /* Колір при наведенні */
  }
`;

// Стилізована кнопка для входу
export const LoginButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin: 0 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #cccccc;
  }
`;

// Стилізована кнопка для реєстрації
export const RegisterButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin: 0 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #cccccc;
  }
`;

// Стилізований Navbar, замінюючи Bootstrap Navbar
export const Navbar = styled(BootstrapNavbar)`
  background-color: #343a40; /* Темний фон */
  border-radius: 0.25rem; /* Заокруглені кути */
`;

export const Nav = styled(BootstrapNav)`
  .nav-link {
    color: #ffffff !important; /* Колір посилань */

    &:hover {
      color: #cccccc !important; /* Колір при наведенні */
    }
  }
`;
