import React, { useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  FormContainer,
  TextArea,
  SubmitButton,
} from './FormStyled';

export const CommentForm = ({ onSubmit }) => {
  const [text, setText] = useState(() => {
        const savedText = localStorage.getItem('review');
    return savedText ? JSON.parse(savedText) : ''
  });

  const handleTextChange = evt => {
    const value = evt.target.value;
    setText(value);
    localStorage.setItem('review', JSON.stringify(value))
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (text === '') {
      alert('Fill up all the fields!');
      return;
    }
    const formData = {
      review: text,
      id: uuidv4(),
    };
    setText('');
    onSubmit(formData);
    localStorage.removeItem('review')
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextArea onChange={handleTextChange} value={text} />
        <SubmitButton type="submit">Відправити</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default CommentForm;
