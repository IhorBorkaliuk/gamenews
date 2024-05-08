import React from 'react'
import { InputSearch } from 'components/SearchBar/StyledSearchBar';

const SearchBarGames = ({ setSearchParam, queryGames }) => {
    const handleSearchGames = ({ target }) => {
      console.log(target);
    setSearchParam({ search: target.value });
  };

  return (
    <div>
      <InputSearch
        placeholder="Введіть запит"
        onChange={handleSearchGames}
        value={queryGames}
      />
    </div>
  );
};

export default SearchBarGames
