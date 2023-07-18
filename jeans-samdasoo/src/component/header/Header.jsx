import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
z-index: 2;
  position: fixed;
  top: 0;
  padding: 20px;
  width: calc(100% - 32px);
  font-family: 'Pacifico', cursive;
  font-size: 3.5rem;
  background-image: linear-gradient(to right, #A9F5F2, #ACFA58, #F2F5A9);
  height: 90px; 
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

function Header(props) {
  const handleButtonClick = () => {
    window.open(props.url, "_blank"); // Redirect to the specified URL
  };

  return (
    <Wrapper>
      <Title>{"JeanDaSoo"}</Title>
      <Button text={"Homepage"} onClick={handleButtonClick} />
    </Wrapper>
  );
}

export default Header;
