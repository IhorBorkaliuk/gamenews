import styled from 'styled-components';

// Задній фон модального вікна, який затемнює весь екран
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); // напівпрозорий чорний фон
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

// Саме модальне вікно
export const ModalContainer = styled.div`
  background: #fff;
  width: 400px;
  max-width: 100%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1001;
`;

// Заголовок модального вікна
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

// Заголовок тексту
export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

// Кнопка закриття
export const ModalCloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

// Вміст модального вікна
export const ModalBody = styled.div`
  margin-bottom: 20px;
`;

// Форма
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// Поле введення
export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
`;

// Кнопка реєстрації
export const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
