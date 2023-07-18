import React from "react";
import styled from "styled-components";
import Header from "../header/Header";
import Footer from "./Footer";
import JeanDaSoo from "../item/JeanDaSoo";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 30px;
`;

function Layout() {
    const homepageUrl = "https://www.jpdc.co.kr/samdasoo/index.htm";

    return (
        <>
        <Header url={homepageUrl}/>
        <Container style={{ margin: "160px 40px 40px 40px" }}>
            <JeanDaSoo />
            <JeanDaSoo />
            <JeanDaSoo />
        </Container>
        <Container>
            <JeanDaSoo />
            <JeanDaSoo />
            <JeanDaSoo />
        </Container>
        <Container>
            <JeanDaSoo />
            <JeanDaSoo />
            <JeanDaSoo />
        </Container>
        <Footer />
        </>
    );
}

export default Layout;