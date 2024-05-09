import React, { useState } from 'react';
import { DropdownContainer, DropdownHeader, DropdownItem, DropdownList } from './FilterStyled';

const FilterDropdown = ({ genres }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        {selectedOption ? selectedOption : 'Виберіть жанр'}
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {genres.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default FilterDropdown;
