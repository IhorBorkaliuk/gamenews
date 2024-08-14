// GamePageStyled.js
import styled from 'styled-components';

// Основний контейнер для сторінки гри
export const Wrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Заголовок гри
export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

// Зображення гри
export const ImageGame = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

// Опис гри
export const DescriptionGame = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.6;
`;

// Параграфи для платформ, жанру тощо
export const ParagraphGame = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 5px 0;
  text-align: center;

  & a {
    color: #007bff;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
