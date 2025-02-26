import React, { useState} from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  Form,
  Input,
  SubmitButton,
} from './ModalRegStyled';

const RegistrationModal = ({ setOpenReg }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeLogin = evt => {
    setLogin(evt.target.value);
  };

  const handleChangePassword = evt => {
    setPassword(evt.target.value);
  };

  const handleChangeEmail = evt => {
    setEmail(evt.target.value);
  };

  const handleClickClose = () => {
    setOpenReg(false);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
        if (!login || !password || !email) {
          alert('Please fill in all fields.');
          return;
        }
    const dataForm = {
      login,
      password,
      email,
    };
    localStorage.setItem('data', JSON.stringify(dataForm));
    handleClickClose();
    window.location.reload();
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Реєстрація</ModalTitle>
          <ModalCloseButton onClick={handleClickClose}>
            &times;
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <Input
              onChange={handleChangeLogin}
              value={login}
              type="text"
              placeholder="Ім'я"
              required
            />
            <Input
              onChange={handleChangeEmail}
              value={email}
              type="email"
              placeholder="Електронна пошта"
              required
            />
            <Input
              onChange={handleChangePassword}
              value={password}
              type="password"
              placeholder="Пароль"
              required
            />
            <SubmitButton type="submit">Зареєструватися</SubmitButton>
          </Form>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default RegistrationModal;
