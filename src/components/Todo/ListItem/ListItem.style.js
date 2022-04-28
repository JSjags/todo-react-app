import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    height: fit-content;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
    background: ${(props) => props.hue ? `hsla(${props.hue}deg, 100%, 50%, 1)` : "blue" };
    background: ${(props) => props.completed && `hsla(${props.hue}deg, 100%, 30%, 1)`};
    max-width: 500px;

    h3 {
        background: ${(props) => props.hue && `hsla(${props.hue}deg, 100%, 10%, 1)` };
        filter: hue-rotate(180deg);
        background-clip: text;
        -webkit-background-clip: text;
        font-weight: 500;
        padding: 10px 0 0 5px;
        display: block;
        height: 100%;
        font-size: 1em;
    }
    p {
        font-size: 1em;
        flex: 1;
        padding: 10px 5px;
        color: transparent;
        font-weight: 600;
        text-transform: capitalize;
        background: ${(props) => props.hue && `hsla(${props.hue}deg, 100%, 10%, 1)` };
        filter: hue-rotate(180deg);
        background-clip: text;
        -webkit-background-clip: text;
        text-decoration: ${(props) => props.completed && `line-through`};
        text-decoration-color: ${(props) => props.hue && `hsla(${props.hue}deg, 100%, 10%, 1)` };
        text-decoration-thickness: 2px;
        font-style: ${(props) => props.completed && "italic"};
    }
    .controls {
        height: 100%;
        margin-top: 10px;


        span {
            font-size: .6em;
            display: inline-flex;
            height: 100%;
            width: fit-content;
            background: white;
            font-weight: bolder;
            padding: 5px;
            align-items: center;
            cursor: pointer;
    
            :nth-child(1) {
                color: red;
                transition: all 200ms ease;
                border-radius: 5px 0 0 5px;
    
                :hover {
                    color: white;
                    background: red;
                }
            }
            :nth-child(2) {
                color: black;
                transition: all 200ms ease;
    
                :hover {
                    color: white;
                    background: black;
                }
            }
            :nth-child(3) {
                color: green;
                transition: all 200ms ease;
    
                :hover {
                    color: white;
                    background: green;
                }
            }
        }
    }
    
`