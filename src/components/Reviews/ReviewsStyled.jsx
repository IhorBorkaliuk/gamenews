import styled from 'styled-components';

export const SearchDropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f1f1;
  }

  &.selected {
    background-color: #007bff;
    color: white;
  }
`;
