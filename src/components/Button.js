import styled from "styled-components";

export default styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    font-weight: bolder;
    border-radius: 3px;
    color: darkblue;
    border: 2px solid darkblue;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;

    &:hover {
    background-color: darkblue;
    color: white;
    }
`;