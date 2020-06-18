import React, { useState } from 'react'
import { NextPage } from "next"
import styled from "styled-components"
import NewsCard from "components/NewsCard"
import { News } from "types/types"
import LockIcon from '@material-ui/icons/Lock';
import { useLogin } from "hooks/useLogin";


const LoginPage: NextPage = () => {
  const { handleSubmit, handleChange, error } = useLogin();

  return (
    <Wrapper>
      <Title>Tus-Schedule</Title>
      <Input
        onChange={handleChange}
        type="text"
        name="username"
        placeholder="ユーザ名"
      />
      <Input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="パスワード"
      />
      <Error>{error}</Error>
      <Button onClick={handleSubmit}>
        <LockIcon />
        ログイン
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-top: 50px;
  max-width: 600px;
`
const Title = styled.h1`
  font-weight: bold;
  color: #347a39;
  text-align: center;
  font-size: 2.4rem;
`
const Error = styled.p`
  font-weight: bold;
  color: #dc3939;
  text-align: center;
  font-size: 0.9rem;
  margin: 10px 0px;
`
const Input = styled.input`
  color: block;
  font-weight: bold;
  padding: 20px 40px;
  text-shadow: 1px 1px 1px white;
  background: #EBECF0;
  border: none;
  border-radius: 70px;
  box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px white;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;
  &:focus {
    box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px white;
  }
  margin: 15px;
`
const Button = styled.button`
  display: flex;
  color: #347a39;
  font-size: 1rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  padding: 15px 40px;
  border-radius: 120px;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  margin: 15px;
`

export default LoginPage;
