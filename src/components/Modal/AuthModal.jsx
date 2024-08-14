import React, { useState } from 'react';

import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  InputField,
  SubmitButton,
  CancelButton,
} from './ModalAuthStyled';

export const AuthModal = ({ setOpen, setIsLoggedIn }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLogin = evt => {
    setLogin(evt.target.value);
  };

  const handleChangePassword = evt => {
    setPassword(evt.target.value);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const savedData = localStorage.getItem('data');
    if (savedData) {
      const { login: savedLogin, password: savedPassword } =
        JSON.parse(savedData);
      if (login === savedLogin && password === savedPassword) {
        setIsLoggedIn(true);
        setOpen(false);
        alert('Login successful!');
      } else {
        alert('Invalid login or password!');
      }
    } else {
      alert('No user found!');
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Login</ModalTitle>
          <ModalCloseButton onClick={handleClickClose}>
            &times;
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody onSubmit={handleSubmit}>
          <InputField
            onChange={handleChangeLogin}
            value={login}
            type="text"
            placeholder="Username"
          />
          <InputField
            onChange={handleChangePassword}
            value={password}
            type="password"
            placeholder="Password"
          />
          <SubmitButton>Login</SubmitButton>
          <CancelButton onClick={handleClickClose}>Cancel</CancelButton>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default AuthModal;
