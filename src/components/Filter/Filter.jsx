import React, { useState } from 'react';
import {
  DropdownContainer,
  DropdownHeader,
  DropdownItem,
  DropdownList,
} from './FilterStyled';

const FilterDropdown = ({ games, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const genres = [...new Set(games
    .map(game => game.genre))]

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option); // Передаємо значення до батьківського компоненту
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        {selectedOption || 'Choose genre'}
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {genres.map(option => (
            <DropdownItem
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default FilterDropdown;
