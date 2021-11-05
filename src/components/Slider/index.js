import React from "react";
import styled from "styled-components";

function SliderComponent({ value, handleChange, min, max, step }) {
  return (
    <Container>
      <Slider
        type="range"
        defaultValue={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
      />
    </Container>
  );
}

export default SliderComponent;
const Container = styled.div`
  display: grid;
  place-items: center;
  margin-left: 10px;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 4px;

  background-color: #e1e5e9;
  outline: none;
  opacity: 1;
  --webkit-transition: 0.2s;
  transition: opacity 0.2s;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #3a7bec;
    cursor: pointer;
    border: none;
  }

  ::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #3a7bec;
    cursor: pointer;
    border: none;
  }
`;
