import React, { useState } from "react";
import styled from "styled-components";
import { HamBurger } from "./components";

function App() {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue(!value);
  };

  return (
    <AppContainer>
      <HamBurger value={value} handleClick={handleClick} />
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
  display: flex;
  justify-content: center;
  align-items: center;
`;
