import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    padding: 5px 10px;
    border-radius: 10px;
    background: bisque;
    width: fit-content;
    margin: 0 auto;

    h1 {
        color: transparent;
        background-image: linear-gradient(to bottom right, purple, teal);
        background-clip: text;
        -webkit-background-clip: text;
    }
`