import React from "react";
import styled from "styled-components";

const IconWithToolTip = ({ children, hoverColor, tooltip }) => {
  return (
    <IconWrapper hoverColor={hoverColor}>
      <Tooltips className="tooltip">{tooltip}</Tooltips>
      <Icon className="icon">{children}</Icon>
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
  font-size: 18px;
  display: flex;
  justify-content: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  cursor: pointer;

  :hover {
    background-color: ${({ hoverColor }) => hoverColor};

    .tooltip {
      top: -45px;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
      background: ${({ hoverColor }) => hoverColor};
      color: #ffffff;

      ::before {
        background: ${({ hoverColor }) => hoverColor};
      }
    }

    svg {
      fill: #ffffff;
    }
  }
`;

const Icon = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #000000;
    color: #000000;
  }

  :hover {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
    .tooltip {
      text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
    }
  }
`;

const Tooltips = styled.div`
  position: absolute;
  top: 0px;
  font-size: 14px;
  background: #ffffff;
  color: #000000;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;
