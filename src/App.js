import styled from "styled-components";
import { ToggleButton } from "./components";

function App() {
  return (
    <AppContainer>
      <ToggleButton />
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
