import React, { useState } from 'react';
import Reviews from 'components/Reviews/Reviews';
import {
  ImageGame,
  DescriptionGame,
  ParagraphGame,
  AddToFavoritesButton,
  AlreadyInFavoritesButton,
  WrapperGamePage,
  Title,
} from './GamePageStyed';
import { useLocation } from 'react-router';

const GamePage = ({ isLoggedIn, games }) => {
  const location = useLocation();
  const { state } = location;
  const {
    title,
    thumbnail,
    short_description,
    genre,
    platform,
    developer,
    release_date,
    game_url,
  } = state;
  const [favourites, setFavourite] = useState(
    JSON.parse(localStorage.getItem('favourite') || [])
  );

  const addToFavourite = () => {
    const updatedFavourites = [...favourites, title]; 
    setFavourite(updatedFavourites); 
    localStorage.setItem('favourite', JSON.stringify(updatedFavourites)); 
  };

  const deleteFromFavourite = () => {
    const updatedFavourites = favourites.filter(item => item !== title); 
    setFavourite(updatedFavourites); 
    localStorage.setItem('favourite', JSON.stringify(updatedFavourites)); 
  };

  const isInFavourite = favourites.includes(title);

  return (
    <WrapperGamePage>
      {isLoggedIn &&
        (isInFavourite ? (
          <AlreadyInFavoritesButton onClick={deleteFromFavourite}>
            Гра в обраному
          </AlreadyInFavoritesButton>
        ) : (
          <AddToFavoritesButton onClick={addToFavourite}>
            Додати до улюблених
          </AddToFavoritesButton>
        ))}
      <Title>{title}</Title>
      <ImageGame src={thumbnail} />
      <DescriptionGame>{short_description}</DescriptionGame>
      <ParagraphGame>Platform: {platform}</ParagraphGame>
      <ParagraphGame>Genre: {genre}</ParagraphGame>
      <ParagraphGame>Developer: {developer}</ParagraphGame>
      <ParagraphGame>Release date: {release_date}</ParagraphGame>
      <ParagraphGame>
        Play:{' '}
        <a href={game_url} target="_blank" rel="noreferrer">
          {game_url}
        </a>
      </ParagraphGame>
      {isLoggedIn && <Reviews games={games} />}
    </WrapperGamePage>
  );
};

export default GamePage;
