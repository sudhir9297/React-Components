import React, { useState } from "react";
import styled from "styled-components";
import { IoChevronDown } from "react-icons/io5";

function Accordion({ title, content }) {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue(!value);
  };

  return (
    <Container>
      <Header onClick={handleClick} value={value}>
        <Title>{title}</Title>
        <Icon>
          <IoChevronDown />
        </Icon>
      </Header>
      <Content value={value}>{content}</Content>
    </Container>
  );
}

export default Accordion;

const Container = styled.div`
  height: fit-content;
  width: 300px;
  border-radius: 4px;
  border: 1px solid #e1e5e9;
  color: #0a0a0a;
  background: #f0f4f7;
  margin: 5px 0;
`;

const Header = styled.div`
  height: 60px;
  width: 100%;
  max-height: ${({ value }) => (value ? "70px" : "50px")};
  transition: max-height 0.25s ease-in-out;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Title = styled.div`
  padding-left: 15px;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  padding: 8px 5px;
  margin-left: 15px;
`;

const Content = styled.div`
  width: 100%;
  height: 90px;
  max-height: ${({ value }) => (value ? "100px" : "0px")};
  transition: max-height 0.25s ease-in-out;
  font-size: 14px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ value }) => (value ? "#e1e5e9" : "transparent")};
`;
