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
