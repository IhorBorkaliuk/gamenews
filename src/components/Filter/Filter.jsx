import React, { useState } from 'react';
import {
  DropdownContainer,
  DropdownHeader,
  DropdownItem,
  DropdownList,
} from './FilterStyled';

const FilterDropdown = ({ games, onChange }) => {
  const [isOpenGenre, setIsOpenGenre] = useState(false);
  const [isOpenPlatform, setIsOpenPlatform] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const genres = games
    .map(game => game.genre)
    .filter((game, index, games) => games.indexOf(game) === index);

  const platforms = games
    .map(game => game.platform)
    .filter((game, index, games) => games.indexOf(game) === index)

  const toggleDropdownGenre = () => {
    setIsOpenGenre(!isOpenGenre);
  };

  const toggleDropdownPlatform = () => {
    setIsOpenPlatform(!isOpenPlatform);
  };

  const handleGenreClick = genre => {
    setSelectedGenre(genre);
    setIsOpenGenre(false);
    onChange({ genre, platform: selectedPlatform }); // Передаємо значення до батьківського компоненту
  };
    const handlePlatformClick = platform => {
      setSelectedPlatform(platform);
      setIsOpenPlatform(false);
      onChange({platform, genre: selectedGenre}); // Передаємо значення до батьківського компоненту
    };

  return (
    <div>
      <DropdownContainer>
        <DropdownHeader onClick={toggleDropdownGenre}>
          {selectedGenre ? selectedGenre : 'Choose genre'}
        </DropdownHeader>
        {isOpenGenre && (
          <DropdownList>
            {genres.map(option => (
              <DropdownItem
                key={option}
                onClick={() => handleGenreClick(option)}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
      <DropdownContainer>
        <DropdownHeader onClick={toggleDropdownPlatform}>
          {selectedPlatform ? selectedPlatform : 'Choose platform'}
        </DropdownHeader>
        {isOpenPlatform && (
          <DropdownList>
            {platforms.map(option => (
              <DropdownItem
                key={option}
                onClick={() => handlePlatformClick(option)}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </div>
  );
};

export default FilterDropdown;
