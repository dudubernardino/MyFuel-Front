import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';

import { Container, Loading } from './styles';
import logo from '~/assets/logoBranca.png';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = ({ name, email, password }) => {
    dispatch(signUpRequest(name, email, password));
  };

  return (
    <>
      <Container>
        <img src={logo} alt="Dino" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Seu nome" />
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />

          <button type="submit">
            {loading ? (
              <Loading>
                <FaSpinner color="#fff" size={18} />
              </Loading>
            ) : (
              'Criar conta'
            )}
          </button>
          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </Container>
    </>
  );
}
