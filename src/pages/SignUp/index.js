import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';
import logo from '~/assets/logoBranca.png';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  job: Yup.string().required('O cargo é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const handleSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <Container>
        <img src={logo} alt="Dino" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Seu nome" />
          <Input name="job" placeholder="Seu cargo" />
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />

          <button type="submit">Criar conta</button>
          <Link to="/">Já tenho uma conta</Link>
        </Form>
      </Container>
    </>
  );
}
