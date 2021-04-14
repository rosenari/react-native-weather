import React from 'react';
import Styled from "styled-components/native";
import type { ReactNode } from 'react'

const Container = Styled.View`
  flex:1;
  background-color:#EEE;
  justify-content:center;
`;

const Text = Styled.Text`
  text-align:center;
`;

const App: () => ReactNode = () => {
  return (
    <Container>
      <Text>weather</Text>
    </Container>
  );
};

export default App;