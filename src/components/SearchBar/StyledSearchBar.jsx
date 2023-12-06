import styled from "styled-components";

export const InputSearch = styled.input`
margin-top: 15px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  width: 100%;
  max-width: 300px;

  /* Зміна стилю при фокусі */
  &:focus {
    border-color: #4d4c4a; /* Зелений колір */
    box-shadow: 0 0 5px rgba(27, 27, 27, 0.5); /* Тінь при фокусі */
  }

  /* Додатковий стиль для темного фону */
  body.dark-mode & {
    background-color: #333;
    color: #fff;
    border-color: #555;
  }
`;

export const SearchBarWrapper = styled.div`
    text-align: center;
`;