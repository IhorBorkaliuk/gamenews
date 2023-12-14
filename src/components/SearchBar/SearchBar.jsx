import React from 'react';
import { InputSearch, SearchBarWrapper } from './StyledSearchBar';

const SearchBar = ({ setSearchParam, query }) => {

  const handleSearch = ({target}) => {
    setSearchParam({search: target.value})
  };

  return (
    <SearchBarWrapper>
      <InputSearch
        placeholder="Введіть запит..."
        onChange={handleSearch}
        value={query}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
