import React from "react";
import styled from "styled-components";

import { TiHome, TiHeartFullOutline } from "react-icons/ti";
import { IoSettings } from "react-icons/io5";
import { HiUser } from "react-icons/hi";

const NavBar = () => {
  return (
    <NavWrapper>
      <Item hoverColor="#7FDB6A">
        <Text className="name">Home</Text>
        <Icon>
          <TiHome />
        </Icon>
      </Item>
      <Item hoverColor="#DD2A7B">
        <Text className="name">Favourite</Text>
        <Icon>
          <TiHeartFullOutline />
        </Icon>
      </Item>
      <Item hoverColor="#2F46F4">
        <Text className="name">User</Text>
        <Icon>
          <HiUser />
        </Icon>
      </Item>
      <Item hoverColor="#F58529">
        <Text className="name">Setting</Text>
        <Icon>
          <IoSettings />
        </Icon>
      </Item>
    </NavWrapper>
  );
};

export default NavBar;

const NavWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
`;

const Item = styled.div`
  flex-basis: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #555;
  transform: translateY(0);
  transition: transform 0.5s ease, opacity 0.2s ease;
  cursor: pointer;
  overflow: hidden;

  :hover {
    color: #000000;
    transform: translateY(-6px);

    svg {
      color: ${({ hoverColor }) => hoverColor};
    }

    .name {
      transform: translateY(20px);
      opacity: 1;
      color: ${({ hoverColor }) => hoverColor};
    }
  }
`;

const Text = styled.div`
  position: absolute;
  transform: translate(0, 50px);
  transition: transform 0.5s ease, opacity 0.2s ease;
  color: grey;
  font-size: 14px;
  font-weight: 500;
  opacity: 0;
`;
const Icon = styled.div`
  width: 30px;
  height: 30px;

  svg {
    width: 100%;
    height: 100%;
    color: black;
  }
`;
