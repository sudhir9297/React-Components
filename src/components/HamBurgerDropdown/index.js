import React from "react";
import styled from "styled-components";
import HamBurger from "../HamBurger";
import { FaUserCircle, FaSignOutAlt, FaCog } from "react-icons/fa";

function HamBurgerDropDown({ value, handleClick }) {
  return (
    <Container>
      <HamBurger value={value} handleClick={handleClick} />
      <Wrapper>
        <Arrow value={value} />
        <DropDown value={value}>
          <Item>
            <FaUserCircle style={{ marginRight: "10px" }} />
            Profile
          </Item>
          <Item>
            <FaCog style={{ marginRight: "10px" }} />
            Setting
          </Item>
          <Item>
            <FaSignOutAlt style={{ marginRight: "10px" }} />
            logout
          </Item>
        </DropDown>
      </Wrapper>
    </Container>
  );
}

export default HamBurgerDropDown;

const Container = styled.div`
  position: relative;
`;

const DropDown = styled.div`
  border-radius: 8px;
  border: ${({ value }) => (value ? "1px" : "0px")} solid #e1e5e9;
  width: 200px;
  height: fit-content;
  max-height: ${({ value }) => (value ? "200px" : "0px")};
  background-color: #f0f4f7;
  overflow: hidden;
  transition: all 0.25s ease-in-out;
`;

const Item = styled.div`
  color: black;
  margin: 10px;
  font-weight: 600;
  font-size: 20px;

  :hover {
    color: #3a7bec;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 120px;
`;
const Arrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  top: -15px;
  left: 20px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #f0f4f7;
  opacity: ${({ value }) => (value ? 1 : 0)};
  transition: all 0.25s ease-in-out;
`;
