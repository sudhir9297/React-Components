import React, { useState } from "react";
import styled from "styled-components";
import { SliderComponent } from "./components";

function App() {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <AppContainer>
      <h2>{value}</h2>
      <SliderComponent
        value={value}
        handleChange={handleChange}
        min={0}
        max={100}
        step={0.001}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #1f1f1f;
  color: #ffffff;
`;
