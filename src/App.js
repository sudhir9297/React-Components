import React, { useState } from "react";
import styled from "styled-components";
import { RadioButton } from "./components";

function App() {
  const [value, setValue] = useState(1);

  const handleClick = (value) => {
    setValue(value);
  };

  const List = [
    {
      id: 1,
      name: "Sliver Card",
    },
    {
      id: 2,
      name: "Gold Card",
    },
    ,
    {
      id: 3,
      name: "Platinum Card",
    },
  ];

  return (
    <AppContainer>
      {List.map((item) => (
        <RadioButton
          key={item.id}
          value={value}
          handleClick={handleClick}
          item={item}
        />
      ))}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px;
  background-color: #141518;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
