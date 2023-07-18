import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.div`
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  width: 70%;

  img {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
  }
`;

const Text = styled.div`
    font-family: 'SUITE-Regular';
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
`;

function JeanDaSoo() {
  return (
    <Container>
      <Image>
        <img
          className="samdasooImage"
          alt="samdasoo"
          src={require("C:/Users/20mas/OneDrive/바탕 화면/FE/React/jeans-samdasoo/src/component/item/image-removebg-preview.png")}
        />
      </Image>
      <Text>
        <p>삼다수<br/><br/>1080원</p>
      </Text>
    </Container>
  );
}

export default JeanDaSoo;
