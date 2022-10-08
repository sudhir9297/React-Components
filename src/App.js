import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const scrollBar = Scrollbar.init(document.querySelector(".main"), {
      damping: 0.01,
      delegateTo: document,
      alwaysShowTracks: true,
      speed: 0.2,
    });

    ScrollTrigger.defaults({
      scroller: ".main",
    });
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        if (arguments.length) {
          scrollBar.scrollTop = value;
        }
        return scrollBar.scrollTop;
      },
    });

    scrollBar.addListener(ScrollTrigger.update);

    const matches = document.querySelectorAll("p");

    matches.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: "0%",
        stagger: 1,
        scrollTrigger: {
          trigger: target,
          scrub: true,
          start: "top center",
          end: "bottom 40%",
        },
      });
    });

    return () => {};
  }, []);

  return (
    <AppContainer>
      <Container className="main">
        <Section>Scroll to See Effect</Section>
        <Text>
          <p>I'm a Junior Full Stack Developer</p>
          <p>and a recent graduate of the</p>
          <p>Software Program.</p>

          <p>I create project under the notion</p>
          <p>that "less is more" and my work</p>
          <p>reflects my addiction for minimal</p>
          <p>and clean design as well as my</p>
          <p>desire to push boundaries.</p>

          <p>I am currently learning Redux and</p>
          <p>Jest to further my front-end</p>
          <p>focus while developing my concepts on</p>
          <p>FlyBy into native mobile application</p>
          <p>using React Native.</p>
        </Text>
        <Section>Scroll Up</Section>
      </Container>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  font-size: 100px;
  position: relative;
  background-color: #0f0f0f;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Section = styled.div`
  height: 70vh;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 100px;
  font-weight: 600;
  padding: 70px 0;

  p {
    background: linear-gradient(to right, #ffffff 50%, #252525 50%);
    background-size: 200% 100%;
    background-position-x: 100%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    user-select: none;
  }
`;
