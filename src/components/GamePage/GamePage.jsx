
import React, { useState } from 'react'
import {
  ImageGame,
  DescriptionGame,
  ParagraphGame,
  AddToFavoritesButton,AlreadyInFavoritesButton,
  WrapperGamePage,
  Title,
} from './GamePageStyed';
import { useLocation } from 'react-router'
    

const GamePage = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  const checkIsFavourite = localStorage.getItem('favourite')
  const [isFavourite, setFavourite] = useState(checkIsFavourite ? true : false);
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

  const addToFavourite = () => {
    localStorage.setItem('favourite', JSON.stringify(title));
    setFavourite(true);
  };
  const deleteFromFavourite = () => {
    localStorage.removeItem('favourite')
    setFavourite(false)
  }
  console.log(isFavourite);
  return (
    <WrapperGamePage>
      {isLoggedIn && (
        isFavourite ? (
          <AlreadyInFavoritesButton onClick={deleteFromFavourite}>
            Гра в обраному
          </AlreadyInFavoritesButton>
        ) : (
          <AddToFavoritesButton onClick={addToFavourite}>
            Додати до улюблених
          </AddToFavoritesButton>
        )
      )} 
      <Title>{title}</Title>
      <ImageGame src={thumbnail}></ImageGame>
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
    </WrapperGamePage>
  );
};

export default GamePage;