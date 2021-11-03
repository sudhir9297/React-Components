import React, { useState } from "react";
import styled from "styled-components";
import { ToggleButton } from "./components";

function App() {
  const [value, setValue] = useState(50);

  const handleClick = () => {
    setValue(!value);
  };

  return (
    <AppContainer>
      <ToggleButton value={value} handleClick={handleClick} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;
