import React, { useState } from 'react'
import { InputSearch, SearchBarWrapper } from './StyledSearchBar';

export const SearchBar = ({ posts }) => {

    const [search, setSearch] = useState('')
    
  const handleSearch = (evt) => {
        const search = evt.target.value
        setSearch(search)
    }
console.log(posts);
const filteredPosts = posts.filter(el => {
  return el.title.toLowerCase().includes(search.toLowerCase());
});
    console.log(filteredPosts)

  return (
    <SearchBarWrapper filteredPosts={filteredPosts}>
<InputSearch placeholder='Введіть запит...' onChange={handleSearch} value={search} ></InputSearch>
    </SearchBarWrapper>
  );
}

export default SearchBar


