import React, { useState, useEffect } from 'react';
import {
  SearchDropdownContainer,
  DropdownItem,
  DropdownList,
} from './ReviewsStyled';

export const SearchGames = ({ games }) => {
  const [choosenGame, setChoosenGame] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = evt => {
    const value = evt.target.value;
    setChoosenGame(value);
    setIsOpen(true);
  };

  const handleClick = game => {
    setChoosenGame(game.title); // Припускаємо, що 'title' є ключем для назви гри
    setIsOpen(false);
  };

  useEffect(() => {
    const filtered = games.filter(el =>
      el.title.toLowerCase().includes(choosenGame.toLowerCase())
    );
    setFilteredGames(filtered);
  }, [choosenGame, games]);


  return (
    <SearchDropdownContainer>
      <input
        onChange={handleSearch}
        value={choosenGame}
        onFocus={() => setIsOpen(true)}
        placeholder="Введіть назву гри..."
      />
      {isOpen && filteredGames.length > 0 && (
        <DropdownList>
          {filteredGames.map((game, index) => (
            <DropdownItem
              key={index}
              onClick={() => handleClick(game)}
              className={game.title === choosenGame ? 'selected' : ''}
            >
              {game.title} {/* Відображаємо назву гри */}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </SearchDropdownContainer>
  );
};

export default SearchGames;
