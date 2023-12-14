import React from 'react';
import { InputSearch, SearchBarWrapper } from './StyledSearchBar';

const SearchBar = ({ setSearchParam }) => {

  const handleSearch = ({target}) => {
    setSearchParam({search: target.value})
  };

  return (
    <SearchBarWrapper>
      <InputSearch
        placeholder="Введіть запит..."
        onChange={handleSearch}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
