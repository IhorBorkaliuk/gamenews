// GamesStyled.js
import styled from 'styled-components';
import { Button, Row, Col } from 'react-bootstrap';

// Контейнер для всього компонента і розміщення елементів
export const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

// Стиль для кнопки "Load more"
export const LoadMore = styled(Button)`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

// Стиль для контейнера гри
export const GameContainer = styled(Row)`
  margin-top: 20px;
`;

// Стиль для порожнього стану (NoPostsFound)
export const NoPostsWrapper = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
