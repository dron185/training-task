import React from "react";
import "./App.css";
import styled from "styled-components";
import imaga from "./images/desert.png";
import { ContainerBtn, LeftBtn, RightBtn } from "./Components/Button.styled";
import { CardWrapper } from "./Components/CardWrapper.styled";

function App() {
  return (
    <div className="App">
      <CardWrapper>
        <ImgWrapper>
          <CardImg src={imaga} />
        </ImgWrapper>
        <CardTitle>Headline</CardTitle>
        <CardText>
          Faucibus. Faucibus. Sit sit sapien sit
          <br /> tempusrisu ut. Sit molestie ornare in venen.
        </CardText>
        <ContainerBtn>
          <LeftBtn>See more</LeftBtn>
          <RightBtn>Save</RightBtn>
        </ContainerBtn>
      </CardWrapper>
    </div>
  );
}

export default App;

const ImgWrapper = styled.div`
  margin-bottom: 20px;
  width: 280px;
  height: 170px;
`;

const CardImg = styled.img`
  max-width: 100%;
`;

const CardTitle = styled.h1`
  margin-left: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
`;

const CardText = styled.p`
  margin-left: 10px;
  margin-bottom: 19px;
  color: #abb3ba;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
`;
