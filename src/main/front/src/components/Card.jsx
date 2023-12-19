import styled from "styled-components";
import imgs from '../imgs/c1.jpg'

export const CardContainer = styled.div`
    border: 1px solid black;
    box-shadow: 5px 5px 20px #3d3d3d;
    background-image: url(${(props) => props.img || ''});
    background-size: contain;
    background-repeat: no-repeat;
`
// ${(props) => props.img || ''}
export const CardInfo = styled.span`
color: white;
font-size: 0.8rem;
`
