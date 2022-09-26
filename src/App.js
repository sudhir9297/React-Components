import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

function App() {
  console.log(gsap);

  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".singleLine div ", {
      y: 200,
      ease: "power4.out",
      delay: 1,
      duration: 1.8,
      stagger: {
        amount: 0.4,
      },
    });

    return () => {};
  });

  return (
    <AppContainer>
      <Wrapper>
        <Line className="singleLine">
          <Text>
            <span>“</span>C<span>o</span>DE<span>R</span>,
          </Text>
        </Line>
        <Line className="singleLine">
          <Text>
            DESI<span>G</span>N <span>A</span>DDICT,
          </Text>
        </Line>
        <Line className="singleLine">
          <Text>
            <span>A</span>BST<span>RA</span>CT
          </Text>
        </Line>
        <Line className="singleLine">
          <Text>
            {" "}
            T<span>H</span>INKE<span>R.”</span>
          </Text>
        </Line>
      </Wrapper>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  background: #121212;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 11vw;
  position: relative;
  overflow: hidden;

  &:nth-of-type(1) {
    display: flex;
    justify-content: flex-end;
  }
  &:nth-of-type(3) {
    display: flex;
    justify-content: center;
  }
`;

const Text = styled.div`
  position: absolute;
  font-size: 10vw;
  color: #fff;
  line-height: 10vw;

  span {
    font-family: "Major Mono Display", monospace;
    color: rgb(150, 149, 149);
    font-size: 10vw;
  }
`;
