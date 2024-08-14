// NavBarStyled.js
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

// Стиль для кнопки входу
export const LoginButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

// Стиль для кнопки реєстрації
export const RegisterButton = styled(LoginButton)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
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
