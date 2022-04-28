import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items: center;
    max-width: 500px;
    min-width: 300px;
    display: flex;

    input {
        flex: 1;
        width: 250px;
        border: none;
        padding: 20px 10px;
        height: 30px;
        font-size: 1.2em;
        color: ${({ allowEdit }) => allowEdit ? "white" : "black" };
        caret-color: teal;
        border-radius: 5px 0 0 5px;
        display: inline-block;
        outline: none;
        background: ${(props) => props.allowEdit ? "black" : "bisque" };
    }
    button {
    color: white;
    font-size: 1.2em;
    font-weight: 500;
    border-radius: 5px;
    border: none;
    height: 30px;
    padding: 20px 10px;
    border-radius: 0 5px 5px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center
    transition: all 400ms ease-in-out;
    background-image: ${(props) => props.allowEdit ? "linear-gradient(to bottom right, purple, black)" : "linear-gradient(to bottom right, purple, teal)" };
    cursor: pointer;
    }
    button:hover {
    filter: hue-rotate(270deg);
    filter: ${(props) => props.allowEdit ? "hue-rotate(180deg)" : "hue-rotate(270deg)" };
    transition: all 200ms ease-in-out;
    }
`