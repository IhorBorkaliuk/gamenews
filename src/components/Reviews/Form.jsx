import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  SearchDropdownContainer,
  DropdownItem,
  DropdownList,
  FormContainer,
  TextArea,
  InputField,
  SubmitButton,
} from './FormStyled';

export const CommentForm = ({ games, onSubmit }) => {
  const [choosenGame, setChoosenGame] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(() => {
        const savedText = localStorage.getItem('review');
    return savedText ? JSON.parse(savedText) : ''
  });

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
    setTimeout(() => setIsOpen(false), 100);
  }, []);

  const handleTextChange = evt => {
    const value = evt.target.value;
    setText(value);
    localStorage.setItem('review', JSON.stringify(value))
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (choosenGame === '' || text === '') {
      alert('Fill up all the fields!');
      return;
    }
    const formData = {
      game: choosenGame,
      review: text,
      id: uuidv4(),
    };
    setChoosenGame('');
    setText('');
    onSubmit(formData);
    localStorage.removeItem('review')
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <SearchDropdownContainer>
          <InputField
            onChange={handleSearch}
            value={choosenGame}
            onFocus={() => setIsOpen(true)}
            onBlur={handleBlur}
            placeholder="Enter the name of the game..."
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
        <TextArea onChange={handleTextChange} value={text} />
        <SubmitButton type="submit">Відправити</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default CommentForm;
