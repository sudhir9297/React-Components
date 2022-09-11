import React from "react";
import styled from "styled-components";

const IconWithToolTip = ({ children, hoverColor, tooltip }) => {
  return (
    <IconWrapper hoverColor={hoverColor}>
      <Tooltips className="tooltip">{tooltip}</Tooltips>
      <Icon>{children}</Icon>
    </IconWrapper>
  );
};

export default IconWithToolTip;

const IconWrapper = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  background: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  cursor: pointer;

  display: flex;
  justify-content: center;

  :hover {
    background-color: ${({ hoverColor }) => hoverColor};

    svg {
      fill: #fff;
    }
    .tooltip {
      opacity: 1;
      top: -45px;
      background: ${({ hoverColor }) => hoverColor};
      color: #ffffff;
      text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);

      ::before {
        background: ${({ hoverColor }) => hoverColor};
      }
    }
  }
`;

const Tooltips = styled.div`
  position: absolute;

  top: 0px;
  font-size: 14px;
  background: #ffffff;
  color: #000000;
  padding: 6px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  pointer-events: none;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  opacity: 0;

  ::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;

const Icon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #000000;
  }
`;
