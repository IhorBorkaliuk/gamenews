import React, { useState, useEffect, useCallback } from 'react';
import {
  SearchDropdownContainer,
  DropdownItem,
  DropdownList,
  FormContainer,
  TextArea,
  InputField,
  SubmitButton,
} from './FormStyled';

export const SearchGames = ({ games }) => {
  const [choosenGame, setChoosenGame] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('')

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

  const handleBlur = useCallback(() => {
    // Закриття списку через невеликий час після втрати фокусу
    setTimeout(() => setIsOpen(false), 100);
  }, []);

  const handleTextChange = (evt) => {
    const value = evt.target.value
    setText(value)
    console.log(value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (choosenGame === '' || text === '') {
      alert('Заповніть всі поля')
      return
    }
    const formData = {
      game: choosenGame,
      review: text,
    }
    console.log(formData);
    setChoosenGame('')
    setText('')
  }

  return (
    <div>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <SearchDropdownContainer>
            <InputField
              onChange={handleSearch}
              value={choosenGame}
              onFocus={() => setIsOpen(true)}
              onBlur={handleBlur}
              placeholder="Введіть назву гри..."
            />
            {isOpen && filteredGames.length > 0 && (
              <DropdownList>
                {filteredGames.map((game, index) => (
                  <DropdownItem
                    key={index}
                    onMouseDown={() => handleClick(game)}
                    className={game.title === choosenGame ? 'selected' : ''}
                  >
                    {game.title} {/* Відображаємо назву гри */}
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </SearchDropdownContainer>
          <TextArea onChange={handleTextChange} value={text}/>
          <SubmitButton type="submit">Відправити</SubmitButton>
        </form>
      </FormContainer>
    </div>
  );
};

export default SearchGames;
