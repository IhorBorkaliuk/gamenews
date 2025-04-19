import React from 'react';
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
import { useStore } from '../Store/Store';

const RegistrationModal = ({ setOpenReg }) => {
  const { login, setLogin, password, setPassword, email, setEmail } =
    useStore();

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

    console.log(dataForm);
    localStorage.setItem('regData', JSON.stringify(dataForm));
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
              type="text"
              placeholder="Ім'я"
              required
            />
            <Input
              onChange={handleChangeEmail}
              type="email"
              placeholder="Електронна пошта"
              required
            />
            <Input
              onChange={handleChangePassword}
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
