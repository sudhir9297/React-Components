import React from "react";
import styled from "styled-components";

function index({ value, handleClick }) {
  return (
    <Container onClick={handleClick} value={value}>
      <span />
      <span />
      <span />
    </Container>
  );
}

export default index;

const Container = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid #e1e5e9;
  border-radius: 10px;
  background-color: #f0f4f7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  span {
    position: absolute;
    width: 60px;
    height: 8px;
    background-color: #3a7bec;
    border-radius: 4px;
    transition: 0.5s;
  }

  span:nth-child(1) {
    transform: ${({ value }) =>
      value ? "translateY(0px) rotate(45deg)" : "translateY(-20px)"};
  }
  span:nth-child(2) {
    transform: ${({ value }) =>
      value ? "translateX(80px)" : "translateX(0px)"};
  }
  span:nth-child(3) {
    transform: ${({ value }) =>
      value ? "translateY(0px) rotate(315deg)" : "translateY(20px)"};
    transition-delay: 0.15s;
  }
`;
