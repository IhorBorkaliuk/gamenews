import { useEffect, useState } from 'react';
import CommentPostForm from './CommentPostForm';
import {
  ReviewItem,
  ReviewsContainer,
  ReviewTitle,
  DeleteButton,
} from './AllCommentsGameStyled';

export const AllCommentsPosts = () => {
  const [commentsPost, setCommentsPost] = useState(() => {
    const savedComments = localStorage.getItem('commentsPost');
    return savedComments ? JSON.parse(savedComments) : [];
  });

  const handlePostSubmit = data => {
    setCommentsPost(prevState => [...prevState, data]);
  };

  const handleDelete = id => {
    setCommentsPost(commentsPost.filter(el => el.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('commentsPost', JSON.stringify(commentsPost));
  }, [commentsPost]);

  return (
    <ReviewsContainer>
      {commentsPost.map((post, index) => (
        <ReviewItem key={index}>
          <DeleteButton onClick={() => handleDelete(post.id)}>X</DeleteButton>
          <ReviewTitle>{post.postId}</ReviewTitle>
        </ReviewItem>
      ))}
      <CommentPostForm onSubmit={handlePostSubmit} />
    </ReviewsContainer>
  );
};
