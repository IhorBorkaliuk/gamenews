import { useState, useEffect } from 'react';
import CommentForm from './Form';
import {
  ReviewsContainer,
  ReviewsGrid,
  ReviewItem,
  ReviewTitle,
  ReviewText,
  DeleteButton,
} from './ReviewsStyled';

export const Reviews = ({ games }) => {
  const getReviews = () => {
    const savedComments = localStorage.getItem('comment');
    return savedComments ? JSON.parse(savedComments) : [];
  };

  const [reviews, setReviews] = useState(getReviews);

  const handleSubmit = data => {
    setReviews(prevState => [...prevState, data]);
    console.log(reviews);
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter(el => el.id !== id))
  };

  useEffect(() => {
    localStorage.setItem('comment', JSON.stringify(reviews));
  }, [reviews]);
  console.log(reviews);

  return (
    <ReviewsContainer>
      {reviews.length !== 0 && (
        <ReviewsGrid>
          {reviews.map((review, index) => (
            <ReviewItem key={index}>
              <DeleteButton onClick={() => handleDelete(review.id)}>X</DeleteButton>
              <ReviewTitle>{review.game}</ReviewTitle>
              <ReviewText>{review.review}</ReviewText>
            </ReviewItem>
          ))}
        </ReviewsGrid>
      )}
      <CommentForm games={games} onSubmit={handleSubmit} />
    </ReviewsContainer>
  );
};

export default Reviews;
