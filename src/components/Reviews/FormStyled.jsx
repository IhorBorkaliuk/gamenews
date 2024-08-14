// FormStyled.js
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

// Контейнер для всієї форми
export const FormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 500px;
  margin: 20px auto;
`;

// Поле вводу для пошуку гри
export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: #adb5bd; /* Світло-сірий для фокусу */
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, 0.25); /* Світло-сірий тінь */
  }
`;

// Контейнер для випадаючого списку
export const SearchDropdownContainer = styled.div`
  position: relative;
`;

// Випадаючий список
export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
`;

// Елемент випадаючого списку
export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa; /* Світло-сірий для ховера */
  }

  &.selected {
    background-color: #e9ecef; /* Сірий для вибраного елемента */
  }
`;

// Поле вводу для тексту коментаря
export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    border-color: #adb5bd; /* Світло-сірий для фокусу */
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, 0.25); /* Світло-сірий тінь */
  }
`;

// Кнопка відправки
export const SubmitButton = styled(Button)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #6c757d; /* Темно-сірий фон кнопки */
  border-color: #6c757d; /* Темно-сірий бордер кнопки */

  &:hover {
    background-color: #5a6268; /* Трохи темніший сірий для ховера */
    border-color: #545b62; /* Ще темніший сірий для бордера при ховері */
  }
`;
