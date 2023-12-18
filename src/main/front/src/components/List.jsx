import styled from "styled-components";
import { CardContainer } from "./Card";

export const ListContainer = styled.ul`
    position: absolute;
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns || 3}, 1fr);
    grid-auto-rows: 500px;
    grid-gap: 5% 20%;
    width: 100%;
    height: 100%;
    /* top: 10%;
    right: 5%; */
`

export const ListItem = styled(CardContainer)`
    /* border: 1px solid black; */
`

export const ListImg = styled.img`
    width: 80%;
    height: 80%;
`