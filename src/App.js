import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, a } from "react-spring";

function App() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 10,
    (x - window.innerWidth / 2) / 10,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const handleMouseMove = (x, y) => {
    const data = calc(x, y);
    set({ xys: data });
  };

  const handleMouseLeave = () => {
    set({ xys: [0, 0, 1] });
  };

  return (
    <AppContainer>
      <CardBox
        onMouseMove={({ clientX: x, clientY: y }) => handleMouseMove(x, y)}
        onMouseLeave={handleMouseLeave}
        style={{ transform: props.xys.to(trans) }}
      >
        <ImageWrapper className="card__img">
          <Image src={"/shoe1.png"} draggable="false" />
        </ImageWrapper>
        <Name>Nike Air Force</Name>
        <DetailContainer className="card__desc">
          <Description>Best of the Best</Description>
          <span class="old">Rs. 990.00</span>
          <span class="new">Rs. 749.00</span>
        </DetailContainer>
      </CardBox>
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
  /* flex-direction: column; */
  background-color: #f0f0f0;
  color: #000000;
  position: relative;
`;

const CardBox = styled(a.div)`
  width: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  overflow: hidden;
  will-change: transform;
  background-color: #fff;

  box-shadow: 0 0.5rem 1rem #d1d9e6;

  :hover {
    box-shadow: 0 0.9rem 2rem #d1d9e6;

    span {
      left: 0;
    }

    .card__img {
      transform: rotate(30deg);
      margin-left: 3.5rem;
    }

    .card__desc {
      margin-left: 3.5rem;
      padding: 0 1.5rem;
      width: 80%;
    }
  }
`;

const Name = styled.span`
  position: absolute;
  left: -25%;
  top: 0;
  width: 3.5rem;
  height: 100%;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  transition: 0.5s;
`;

const ImageWrapper = styled.div`
  width: 180px;
  height: auto;
  padding: 3rem 0;
  transition: 0.5s;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const DetailContainer = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: 0.5s;

  span {
    display: block;
    text-align: center;
  }

  .old {
    font-size: 14px;
    color: tomato;
    margin-bottom: 0.25rem;
  }
  .new {
    font-size: 18px;
    font-weight: bold;
  }
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: grey;
  user-select: none;
  padding: 5px 0;
`;
