import React from "react";
import { Text } from "react-native";
import { styled } from "styled-components";

function Login() {
  return (
    <StView>
      <Text>Login Page</Text>
    </StView>
  );
}

export default Login;

const StView = styled.View`
  margin-top: 200px;
  margin-left: 500px;
`;
