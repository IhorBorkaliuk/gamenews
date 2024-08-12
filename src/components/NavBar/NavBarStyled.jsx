import styled from 'styled-components';

// Базовий стиль для кнопок
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  font-weight: bold;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

// Кнопка Вхід в темносірому
export const LoginButton = styled(Button)`
  background-color: #333;
  color: white;

  &:hover {
    background-color: #555;
  }

  &:active {
    background-color: #222;
  }
`;

// Кнопка Реєстрація в білому
export const RegisterButton = styled(Button)`
margin-left: 15px;
  background-color: #fff;
  color: #333;
  border: 2px solid #333;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #ddd;
  }
`;
