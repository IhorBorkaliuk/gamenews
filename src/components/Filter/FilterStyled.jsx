// FilterStyled.js
import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 200px; /* Ви можете налаштувати ширину за потреби */
  user-select: none; /* Запобігає виділенню тексту при кліках */
`;

export const DropdownHeader = styled.div`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;

  &:hover {
    background-color: #555;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 200px; /* Встановлює максимальну висоту списку */
  overflow-y: auto; /* Додає вертикальну прокрутку при необхідності */
  z-index: 1000; /* Забезпечує, щоб список був поверх інших елементів */
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;
