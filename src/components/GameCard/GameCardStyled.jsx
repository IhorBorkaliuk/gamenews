// GameCardStyled.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

// Стилізація для Card з `styled-components`
export const StyledCard = styled(Card)`
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

// Стилізація для Card.Img
export const StyledCardImg = styled(Card.Img)`
  border-bottom: 2px solid #f0f0f0;
  transition: opacity 0.3s ease;

  ${StyledCard}:hover & {
    opacity: 0.8;
  }
`;

// Стилізація для StyledNavLink
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;

  .card-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }

  .card-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;

    ${StyledCard}:hover & {
      color: #007bff;
    }
  }

  .card-text {
    font-size: 1rem;
    color: #666;
    flex: 1;
    transition: color 0.3s ease;

    ${StyledCard}:hover & {
      color: #555;
    }
  }
`;
