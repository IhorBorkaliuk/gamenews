import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormContainer, TextArea, SubmitButton } from './FormStyled';
import { useLocation } from 'react-router';

export const CommentForm = ({ onSubmit }) => {
  const [text, setText] = useState(() => {
    const savedText = localStorage.getItem('gameReview');
    return savedText ? JSON.parse(savedText) : '';
  });

  const location = useLocation()
  const { state } = location
  const { id } = state
  
  const { login } = JSON.parse(localStorage.getItem('regData') || {});

  const handleTextChange = evt => {
    const value = evt.target.value;
    setText(value);
    localStorage.setItem('gameReview', JSON.stringify(value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (text === '') {
      alert('Fill up all the fields!');
      return;
    }
    const newComment = {
      review: text,
      id: uuidv4(),
      gameId: id,
      login: login,
    };
    setText('');
    onSubmit(newComment);
    localStorage.removeItem('gameReview');
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <p>
          <b>{login}</b>
        </p>
        <TextArea onChange={handleTextChange} value={text} placeholder='Write your review here...'/>
        <SubmitButton type="submit">Відправити</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default CommentForm;
