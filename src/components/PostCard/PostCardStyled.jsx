// PostCardStyled.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

// Стилізована картка
export const StyledCard = styled(Card)`
  position: relative;
  border: none; /* Видалити стандартний бордер */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Легка тінь для глибини */
  border-radius: 8px; /* Округлені кути */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Анімація для hover ефекту */

  &:hover {
    transform: translateY(-5px); /* Підйом картки при наведенні */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Збільшення тіні при наведенні */
  }
`;

// Стилізоване посилання
export const StyledNavLink = styled(NavLink)`
  text-decoration: none; /* Видалити стандартне підкреслення посилання */
  color: inherit; /* Наслідувати колір тексту картки */

  &:hover {
    color: inherit; /* Зберігати колір тексту при наведенні */
  }
`;

// Стилізоване зображення
export const StyledCardImg = styled(Card.Img)`
  border-top-left-radius: 8px; /* Округлення верхнього лівого кута */
  border-top-right-radius: 8px; /* Округлення верхнього правого кута */
  object-fit: cover; /* Пропорційне заповнення області зображення */
`;

// Стилізоване тіло картки
export const StyledCardBody = styled(Card.Body)`
  padding: 1.5rem; /* Збільшення відступів для тіла картки */
  text-align: center; /* Вирівнювання тексту по центру */
`;
