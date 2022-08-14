import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useSpringCarousel } from "react-spring-carousel";

function Carousel() {
  const [active, setActive] = useState(1);
  const [noOfItem, setNoOfItem] = useState(6);

  const List = [
    {
      id: 1,
      title: "Dracaena Trifasciata",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/4.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 2,
      title: "Crassula Ovata",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/3.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 3,
      title: "Browningia Hertlingiana",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/1.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 4,
      title: "Haworthiopsis Attenuata ",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/5.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 5,
      title: "Chlorophytum Comosum",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/2.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 6,
      title: "Dracaena Trifasciata",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/4.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 7,
      title: "Crassula Ovata",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/3.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 8,
      title: "Browningia Hertlingiana",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/1.png",
      desc: "One of the most effective houseplants in air purification.",
    },
    {
      id: 9,
      title: "Haworthiopsis Attenuata ",
      image:
        "https://default-vessel.s3.ap-south-1.amazonaws.com/avagam-bucket/5.png",
      desc: "One of the most effective houseplants in air purification.",
    },
  ];

  const handleSize = (innerWidth) => {
    if (innerWidth < 599) {
      // mobile
      return setNoOfItem(3);
    }
    if (innerWidth < 899) {
      // tablet portrait
      return setNoOfItem(3);
    }
    if (innerWidth < 1199) {
      // tablet landscape
      return setNoOfItem(4);
    }
    return setNoOfItem(6);
  };

  useEffect(() => {
    window.addEventListener("resize", (e) => handleSize(e.target.innerWidth));
    return () => {
      window.removeEventListener("resize", (e) =>
        handleSize(e.target.innerWidth)
      );
    };
  });

  const {
    slideToNextItem,
    slideToPrevItem,
    carouselFragment,
    useListenToCustomEvent,
  } = useSpringCarousel({
    itemsPerSlide: noOfItem,
    gutter: 20,
    withLoop: true,
    startEndGutter: 100,

    items: List.map((item) => ({
      id: item.id,
      renderItem: (
        <CardBoxWrapper isActive={item.id === active}>
          <BackgroundCard />
          <Image
            src={item.image}
            isActive={item.id === active}
            draggable={false}
          />
          <ItemText isActive={item.id === active}>
            <h3>{item.title}</h3>
            <div>{item.desc}</div>
          </ItemText>
        </CardBoxWrapper>
      ),
    })),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActive(event.nextItem.index + 1);
    }
  });

  const onSliderHandle = (e) => {
    if (e.deltaY > 0) {
      slideToNextItem();
    } else {
      slideToPrevItem();
    }
  };

  return (
    <Container>
      <HeaderWrapper>
        <OptionWrapper>
          <Option>Home</Option>
          <Option>Plant Finder</Option>
          <Option>Product</Option>
          <Option>About Us</Option>
          <Option>Contacts</Option>
          <Option>My Plants</Option>
        </OptionWrapper>
      </HeaderWrapper>
      <ContentWrapper>
        <InnerWrapper>
          <Headtext>Go Green</Headtext>
          <TextWrapper>
            <BoldText>The world of plants</BoldText>
            <Text>
              Discover everything you need to know about your plants, treat them
              with kindness and they will take care of you.
            </Text>
          </TextWrapper>
          <Text>Our Favourite this week</Text>{" "}
        </InnerWrapper>
      </ContentWrapper>

      <SliderWrapper>
        <SliderContainer onWheel={onSliderHandle}>
          {carouselFragment}
        </SliderContainer>
      </SliderWrapper>
    </Container>
  );
}

export default Carousel;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #d9e5e4;
  overflow: hidden;
`;

const wrapperCommon = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const innerWrapperCommon = css`
  width: 75%;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  ${wrapperCommon}
  height: 60px;
`;

const OptionWrapper = styled.div`
  ${innerWrapperCommon}
  display: flex;
  align-items: center;

  a {
    color: #1a2e35;
    text-decoration: none;
  }
`;
const Option = styled.div`
  margin: 1rem;
  padding: 1rem;
  color: #1a2e35;
  white-space: nowrap;
  :hover {
    cursor: pointer;
    color: #5e9270;
  }
`;

const ContentWrapper = styled.div`
  ${wrapperCommon}
  padding-top: 6rem;
`;
const InnerWrapper = styled.div`
  ${innerWrapperCommon}
`;

const Headtext = styled.div`
  font-size: 25px;
  color: #5e9270;
`;

const TextWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  margin-bottom: 30px;
`;

const BoldText = styled.div`
  font-size: 60px;
  font-weight: 600;
  color: #1a2e35;
  width: 30%;
  margin-right: 40px;
  line-height: 80px;
`;

const Text = styled.div`
  width: 30%;
  padding: 10px;
  font-size: 16px;
`;

const SliderWrapper = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const CardBoxWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease-in-out;
  transform-origin: bottom;
  transform: ${({ isActive }) => (isActive ? "scale(1.2)" : "scale(0.9)")};
`;

const BackgroundCard = styled.div`
  background: #e8f0ef;
  height: 80%;
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;

  border-radius: 15px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
`;

const Image = styled.img`
  width: 250px;
  height: auto;
  position: absolute;
  bottom: -10px;
  left: 0;
  user-select: none;
  transition: all 0.3s ease-in-out;
  transform-origin: bottom;
  transform: ${({ isActive }) =>
    isActive ? "scale(1.2) translateY(-40px)" : "scale(1) translateY(0px)"};
`;

const ItemText = styled.div`
  position: absolute;

  right: 20px;
  bottom: 20%;
  display: flex;
  flex-direction: column;
  width: 80%;
  user-select: none;

  h3 {
    font-weight: 600;
    font-size: 18px;
  }

  div {
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    font-size: 12px;
  }
`;
