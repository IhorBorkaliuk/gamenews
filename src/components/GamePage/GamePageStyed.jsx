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
  
` ;

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

export const ReactionButton = styled.button`
  background: ${({ active }) =>
    active
      ? 'linear-gradient(145deg, #d2ffe2, #a6f4c5)'
      : 'linear-gradient(145deg, #ffffff, #e6e6e6)'};
  color: ${({ active }) => (active ? '#2e7d32' : '#444')};
  border: none;
  border-radius: 16px;
  padding: 14px 22px;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({ active }) =>
    active
      ? '0 8px 16px rgba(46, 125, 50, 0.25)'
      : '0 6px 12px rgba(0, 0, 0, 0.05)'};
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }

  & .icon {
    font-size: 26px;
  }
`;



export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
`;


export const ReactionCount = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #555;
  margin-top: 8px;
`;

export const ReactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;