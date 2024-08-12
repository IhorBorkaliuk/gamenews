import styled from 'styled-components';


// Задній фон модального вікна
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Контейнер для модального вікна
export const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1001;
`;

// Заголовок модального вікна
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
`;

// Текст заголовка
export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

// Кнопка закриття модального вікна
export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #333;
  }
`;

// Основний контент модального вікна
export const ModalBody = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

// Поля введення
export const InputField = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

// Кнопка підтвердження
export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Кнопка скасування
export const CancelButton = styled.button`
  padding: 10px;
  background-color: #6c757d;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #5a6268;
  }
`;
