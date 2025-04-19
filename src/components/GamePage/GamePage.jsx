import React, { useState, useEffect } from 'react';
import CommentForm from 'components/Reviews/CommentForm';
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
import {
  ReviewItem,
  ReviewText,
  ReviewTitle,
} from 'components/Reviews/ReviewsStyled';
import { DeleteButton } from 'components/Reviews/ReviewsStyled';
const GamePage = ({ isLoggedIn }) => {
  const [comments, setComments] = useState([]);
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
    id,
  } = state;
  const [favourites, setFavourite] = useState(() => {
    return JSON.parse(localStorage.getItem('favourite')) ?? [];
  });
  console.log(id);

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

  useEffect(() => {
    const getComment = id => {
      const isComment = JSON.parse(localStorage.getItem('comment')) || [];
      const findComment = isComment.filter(comment => comment.gameId === id);
      setComments(findComment);
    };

    getComment(id);
  }, [id, setComments]);

const handleSubmit = newComment => {
  const storedComment = localStorage.getItem('comment');
  const parsedComments = storedComment ? JSON.parse(storedComment) : [];

  const updatedComment = [...parsedComments, newComment];
  localStorage.setItem('comment', JSON.stringify(updatedComment));

  if (newComment.gameId === id) {
    setComments(prev => [...prev, newComment]);
  }
};

  const handleDelete = gameId => {
    const updatedComments = comments.filter(el => el.id !== gameId);
    setComments(updatedComments);

    const stored = JSON.parse(localStorage.getItem('comment')) || [];
    const updatedStored = stored.filter(el => el.id !== gameId);
    localStorage.setItem('comment', JSON.stringify(updatedStored));
  };

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
      {comments.length > 0
        ? comments.map((el, id) => (
            <ReviewItem key={id}>
              <b>{el.login}</b>
              <DeleteButton onClick={() => handleDelete(el.id)}>X</DeleteButton>
              <ReviewTitle>{el.game}</ReviewTitle>
              <ReviewText>{el.review}</ReviewText>
            </ReviewItem>
          ))
        : null}
      {isLoggedIn && <CommentForm onSubmit={handleSubmit} />}
    </WrapperGamePage>
  );
};

export default GamePage;
