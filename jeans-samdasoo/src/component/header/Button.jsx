import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    top: 40%;
    left: 90%;
    font-family: 'Pacifico', cursive;
    font-size: 1.25rem;
    color: #0A2A12;
    cursor: pointer;
    text-align: right;
`;

function Button(props) {
    const { text, onClick } = props;

    return <Wrapper onClick={onClick}>{text || "button"}</Wrapper>;
}

export default Button;