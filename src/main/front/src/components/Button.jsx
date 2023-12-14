import styled from 'styled-components'

export const Button = styled.button`
    display: inline-block;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.color == "white" ? "#4d4d4d" : "white"};
    font-size: ${(props) => props.size || "1.0rem"};
    border-radius: 2px;
    width: ${(props) => props.width || '100%'};
    height: 40px;
    border: none;
    outline: none;
    margin: 5px 0 ;
    background-color: ${(props) => props.color || "#4d4d4d"};
`
