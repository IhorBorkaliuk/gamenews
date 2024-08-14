// NavBarStyled.js
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

// Стиль для кнопки входу
export const LoginButton = styled.button`
  background-color: #333; /* Темно-сірий фон */
  border: 1px solid #ccc; /* Світло-сірий бордер */
  color: #fff; /* Білий текст */
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: #555; /* Світліший сірий фон */
    border-color: #aaa; /* Світліший бордер */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3); /* Тінь при фокусі для контрасту */
  }
`;

// Стиль для кнопки реєстрації
export const RegisterButton = styled(LoginButton)`
  background-color: #666; /* Середньо-сірий фон */
  border: 1px solid #aaa; /* Світліший сірий бордер */

  &:hover {
    background-color: #888; /* Світліший сірий фон */
    border-color: #888; /* Той же колір бордера при ховері */
  }
`;

// Стиль для контейнера профілю користувача
export const UserProfileContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

// Стиль для посилання профілю користувача
export const UserProfileLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

// Стиль для навігаційної панелі
export const NavbarBrand = styled(RouterNavLink)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;

  &:hover {
    color: #adb5bd;
  }
`;

// Стиль для навігаційного посилання
export const NavLink = styled(RouterNavLink)`
  color: #adb5bd;
  text-decoration: none;
  font-size: 16px;
  margin-right: 15px;

  &:hover {
    color: white;
  }
`;
