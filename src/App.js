import React from "react";
import styled from "styled-components";
import { Carousel } from "./components";

function App() {
  return (
    <AppContainer>
      <Carousel />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
