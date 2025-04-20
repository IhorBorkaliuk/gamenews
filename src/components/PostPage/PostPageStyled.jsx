// PostPageStyled.js
import styled from 'styled-components';

// Обгортка для всієї сторінки
export const Wrapper = styled.div`
position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 30px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Заголовок статті
export const Title = styled.h1`
text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

// Зображення статті
export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

// Параграф тексту
export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
`;

// Посилання на джерело статті
export const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
export const ReviewItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative; /* Для розташування кнопки */
`;

export const ReviewTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

export const ReviewText = styled.p`
  font-size: 16px;
  color: #666;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #555;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;
