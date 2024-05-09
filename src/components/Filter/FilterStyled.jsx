import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownHeader = styled.div`
  background-color: #f0f0f0;
  color: #333;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 150px;
  max-height: 200px; 
  overflow-y: auto; 
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  white-space: nowrap;

  &:hover {
    background-color: #f0f0f0;
  }
`;
