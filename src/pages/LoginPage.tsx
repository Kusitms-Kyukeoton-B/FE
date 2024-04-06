import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  width: 320px;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginPage: React.FC = () => {
  return (
    <Container>
      <Input type="text" placeholder="ID" />
      <Input type="password" placeholder="Password" />
      <Button>Login</Button>
      <Button>Register</Button>
    </Container>
  );
};

export default LoginPage;
