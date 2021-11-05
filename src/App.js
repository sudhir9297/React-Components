import React from "react";
import styled from "styled-components";
import { Accordion } from "./components";

function App() {
  return (
    <AppContainer>
      <Accordion title="Octopuses" content="Octopuses have three hearts." />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px;
  background-color: #1f1f1f;
  color: #ffffff;
`;
