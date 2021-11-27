import React from "react";
import styled from "styled-components";

function RadioButton({ value, handleClick, item }) {
  return (
    <Container onClick={() => handleClick(item.id)} isTrue={value === item.id}>
      <Circle>{value === item.id ? <Dot /> : null}</Circle>
      <ItemName>{item.name}</ItemName>
    </Container>
  );
}

export default RadioButton;

const Container = styled.div`
  width: 200px;
  height: 50px;
  border: 2px solid ${({ isTrue }) => (isTrue ? "#3a7bec" : "#e1e5e9")};
  background-color: ${({ isTrue }) => (isTrue ? "#ffffff" : "#e1e5e9")};
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #3a7bec;
  border-radius: 50px;
  margin: 0px 10px;

  display: grid;
  place-items: center;
`;
const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #f0f4f7;
  border-radius: 50px;
`;
const ItemName = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
`;
