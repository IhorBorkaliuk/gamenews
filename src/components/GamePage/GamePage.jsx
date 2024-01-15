import {Wrapper, Title } from 'components/PostPage/PostPageStyled'
import React from 'react'
import { ImageGame, DescriptionGame, ParagraphGame } from './GamePageStyed';
import { useLocation } from 'react-router'
    

const GamePage = () => {
    const location = useLocation()
    const { state } = location
    console.log(state);
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
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default GamePage;