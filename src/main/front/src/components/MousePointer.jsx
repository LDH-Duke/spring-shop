import styled from "styled-components";

export const MousePointer = styled.div`
    position: absolute;
    border: 1px solid black;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    top: 10px;
    left: 0px;
    z-index: 1;
    transform: translate( ${(props) => props.x || 0}px, ${(props) => props.y || 0}px) ;
`