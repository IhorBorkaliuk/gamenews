import React, { useState } from 'react';
import { InputSearch, SearchBarWrapper } from './StyledSearchBar';

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearch = evt => {
    const searchTerm = evt.target.value;
    setSearch(searchTerm);
    onSearch(searchTerm); // Передача значення пошуку назад у батьківський компонент
  };

  return (
    <SearchBarWrapper>
      <InputSearch
        placeholder="Введіть запит..."
        onChange={handleSearch}
        value={search}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
