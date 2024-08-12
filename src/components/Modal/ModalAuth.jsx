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

export const AuthModal = ({setOpen}) => {
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
    
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const dataForm = {
            login: login,
            password: password,
        }
        handleClickClose()
        console.log(dataForm);
    }

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
