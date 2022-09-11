import React from "react";
import styled from "styled-components";

import { IconWithToolTips } from "./components";
import { Instagram, Twitter, Facebook } from "./constant";

function App() {
  return (
    <AppContainer>
      <IconWithToolTips tooltip="Twitter" hoverColor="#1DA1F2">
        {Twitter()}
      </IconWithToolTips>
      <IconWithToolTips tooltip="Instagram" hoverColor="#E4405F">
        {Instagram()}
      </IconWithToolTips>
      <IconWithToolTips tooltip="LinkedIn" hoverColor="#3A559F">
        {Facebook()}
      </IconWithToolTips>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
