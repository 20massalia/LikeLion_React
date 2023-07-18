import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
    font-size: 1.25rem;
    font-weight: bold;
    font-family: 'SUITE-Regular';
`;

function Footer(props) {
    return (
        <Wrapper>
            <p>&copy;2023 Jean.LikeLion</p>
        </Wrapper>
    );
}

export default Footer;