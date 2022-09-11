import React from "react";
import styled from "styled-components";
import { NavBar } from "./components";

function App() {
  return (
    <AppContainer>
      <NavBar />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  background: #f4f5f7;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
