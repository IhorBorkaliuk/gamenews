import styled from 'styled-components';

// Обгортка для всієї сторінки
export const WrapperGamePage = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 30px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Заголовок
export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

// Зображення гри
export const ImageGame = styled.img`
display: block;
margin: 0 auto;
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// Опис гри
export const DescriptionGame = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
`;

// Абзац для різних даних гри
export const ParagraphGame = styled.p`
  font-size: 1rem;
  color: #444;
  margin: 10px 0;

  & a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`
export const AddToFavoritesButton = styled.button`
  background-color: #ff7f50; /* Оранжевий колір для кнопки */
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #ff6347; /* Темніший оранжевий при наведенні */
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  /* Для кнопки, коли вона активна (не додана до вибраного) */
  &.active {
    background-color: #ff6347;
  }

  &.active:hover {
    background-color: #ff4500; /* Наведення для вже доданої кнопки */
  }
`;
export const AlreadyInFavoritesButton = styled.button`
  background-color: #4caf50; /* Зелений колір для кнопки, якщо вже в обраному */
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: not-allowed;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #45a049; /* Темніший зелений при наведенні */
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  /* Додаємо стилі для стану, коли кнопка "Вже в обраному" */
  &.disabled {
    cursor: not-allowed; /* Забороняє натискання */
    background-color: #388e3c; /* Темніший зелений */
  }
`;;
