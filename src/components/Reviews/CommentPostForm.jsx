import { useState } from 'react';
import { TextArea, SubmitButton, FormContainer } from './FormStyled';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router';

export const CommentPostForm = ({ onSubmit }) => {
  const [textPost, setTextPost] = useState(() => {
    const savedText = localStorage.getItem('commentPost');
    return savedText ? JSON.parse(savedText) : '';
  });

  const { id } = useParams()
  const { login } = JSON.parse(localStorage.getItem('regData')) || {};

  const handleChange = e => {
    const value = e.target.value;
    setTextPost(value);
    localStorage.setItem('commentPost', JSON.stringify(value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (textPost === '') {
      alert('Fill up all the fields!');
      return;
    }
    const newPostComment = {
      post: textPost,
      id: uuidv4(),
      postId: id,
      login: login,
    };
    setTextPost('');
    onSubmit(newPostComment);
    localStorage.removeItem('commentPost');
  };

  return (
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <p>
            <b>{login}</b>
          </p>
          <TextArea
            onChange={handleChange}
            value={textPost}
            placeholder="Write your review here..."
          />
          <SubmitButton type="submit">Відправити</SubmitButton>
        </form>
      </FormContainer>
  );
};

export default CommentPostForm;