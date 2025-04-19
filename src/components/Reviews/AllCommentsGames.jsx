import { useState, useEffect } from 'react';
import {CommentForm} from './CommentGameForm';
import {
  ReviewsContainer,
  ReviewsGrid,
  ReviewItem,
  ReviewTitle,
  ReviewText,
  DeleteButton,
} from './AllCommentsGameStyled';

export const Reviews = () => {
  const getReviews = () => {
    const savedComments = localStorage.getItem('commentGame');
    return savedComments ? JSON.parse(savedComments) : [];
  };
  const [reviews, setReviews] = useState(getReviews);


  const handleDelete = id => {
    setReviews(reviews.filter(el => el.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('commentGame', JSON.stringify(reviews));
  }, [reviews]);

  return (
    <ReviewsContainer>
      {reviews.length !== 0 && (
        <ReviewsGrid>
          {reviews.map((review, index) => (
            <ReviewItem key={index}>
              <DeleteButton onClick={() => handleDelete(review.id)}>
                X
              </DeleteButton>
              <ReviewTitle>{review.game}</ReviewTitle>
              <ReviewText>{review.review}</ReviewText>
            </ReviewItem>
          ))}
        </ReviewsGrid>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
