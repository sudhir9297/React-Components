import React, { useState } from "react";
import styled from "styled-components";
import { ContextMenu } from "./components";
import { ContentMenuOption } from "./constant";

function App() {
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  const [toggleContextMenu, setToggleContextMenu] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [itemPosition, setItemPosition] = useState({ x: 0, y: 0 });

  const onRightClick = (e, id) => {
    let parentW = document.getElementById("singleItem").offsetWidth;
    e.preventDefault();

    let x = e.clientX,
      y = e.clientY;

    let leftMarginOffset = (1 / 100) * parentW;

    if (window.innerWidth - e.clientX < 160 + leftMarginOffset) {
      x = window.innerWidth - (leftMarginOffset + 160);
    }

    if (window.innerHeight - e.clientY < 60) {
      y = window.innerHeight - 65;
    }

    var coordinate = { ...itemPosition };
    coordinate.x = x;
    coordinate.y = y;

    setItemPosition(coordinate);
    setToggleContextMenu(true);
    setItemId(id);
  };

  const filterList = (id) => {
    const newData = data.filter((item) => item !== id);
    setData(newData);
  };

  const onContextMenuClick = (name) => {
    switch (name) {
      case "Duplicate":
        console.log("duplicate");
        return setToggleContextMenu(false);
      case "Delete":
        filterList(itemId);
        console.log("Delete");
        return setToggleContextMenu(false);
      case "Edit":
        console.log("Edit");
        return setToggleContextMenu(false);
    }
  };

  return (
    <AppContainer onClick={() => setToggleContextMenu(false)}>
      <h1>Custom Context Menu</h1>

      <InnerWrapper>
        {data.map((item, index) => (
          <CardBox
            key={index}
            id="singleItem"
            onContextMenu={(e) => onRightClick(e, item)}
          >
            {item}
          </CardBox>
        ))}

        {toggleContextMenu && (
          <ContextMenu
            x={itemPosition.x}
            y={itemPosition.y}
            contextItem={[
              ContentMenuOption.edit,
              ContentMenuOption.duplicate,
              ContentMenuOption.delete,
            ]}
            contextClicked={onContextMenuClick}
          />
        )}
      </InnerWrapper>
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
  flex-direction: column;
  background-color: #f0f4f9;
  color: #000000;
  position: relative;
`;

const InnerWrapper = styled.div`
  width: 98%;
  height: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: 2.2rem;
  grid-auto-flow: dense;
  padding: 1rem;

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const CardBox = styled.div`
  background-color: #ffffff;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;

  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  font-size: 40px;
  font-weight: 600;
`;
