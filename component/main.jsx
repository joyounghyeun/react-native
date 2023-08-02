import React from "react";
import { Text } from "react-native";

function main() {
  return (
    <StView>
      <Text>Main Page</Text>
    </StView>
  );
}

export default main;

const StView = styled.View`
  margin-top: 200px;
  margin-left: 500px;
`;
