// StyledSearchBar.js
import styled from 'styled-components';

// Контейнер для пошукового рядка
export const SearchBarWrapper = styled.div`
  position: relative;
  max-width: 600px; /* Можна змінити відповідно до потреб */
  margin: 20px auto; /* Центрування по горизонталі */
`;

// Поле вводу для пошуку
export const InputSearch = styled.input`
  width: 100%;
  padding: 10px 15px; /* Внутрішні відступи */
  border: 1px solid #ced4da; /* Світло-сірий бордер */
  border-radius: 4px; /* Круглі кути */
  font-size: 16px;
  box-sizing: border-box; /* Урахування padding у загальній ширині */

  &:focus {
    border-color: #adb5bd; /* Світло-сірий для фокусу */
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, 0.25); /* Світло-сірий тінь для фокусу */
  }

  &::placeholder {
    color: #6c757d; /* Світло-сірий для placeholder */
    font-style: italic;
  }
`;
