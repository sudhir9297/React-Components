import React from "react";
import styled from "styled-components";

const ContextMenu = ({ x, y, contextItem, contextClicked }) => {
  return (
    <ContextContainer x={x + "px"} y={y + "px"}>
      {contextItem.map((item, index) => (
        <ContextMenuItem key={index} onClick={() => contextClicked(item.label)}>
          <Icon>{item.icon}</Icon>
          <ContextMenuItemText>{item.label}</ContextMenuItemText>
        </ContextMenuItem>
      ))}
    </ContextContainer>
  );
};

export default ContextMenu;

const ContextContainer = styled.div`
  position: absolute;
  width: 150px;
  height: fit-content;
  z-index: 10;
  background-color: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  border: 1px solid #f5f7fa;

  color: #0d1017;
  font-size: 18px;
  border-radius: 8px;
  left: ${(props) => props.x};
  top: ${(props) => props.y};
`;

const ContextMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 5px;
`;

const Icon = styled.div`
  margin: 0 5px;
  height: 100%;
  svg {
    width: 18px;
    height: 18px;
    fill: #0d1017;
  }
`;

const ContextMenuItemText = styled.div`
  padding-left: 6px;
  font-weight: 400;
  height: 100%;
  display: flex;
  align-items: center;
`;
