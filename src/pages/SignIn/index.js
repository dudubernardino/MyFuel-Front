import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Loading } from './styles';
import logo from '~/assets/logoBranca.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  return (
    <>
      <Container>
        <img src={logo} alt="Dino" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />

          <button type="submit">
            {loading ? (
              <Loading>
                <FaSpinner color="#fff" size={18} />
              </Loading>
            ) : (
              'Acessar'
            )}
          </button>
          <Link to="/register">Criar conta</Link>
        </Form>
      </Container>
    </>
  );
}
