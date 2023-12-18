import styled from "styled-components";
import imgs from '../imgs/c1.jpg'

export const CardContainer = styled.div`
    top: 5%;
    right: 30%;
    border: 1px solid black;
    width: 300px;
    height: 450px;
    /* background-color: pink; */
    padding: 5px;
    box-shadow: 5px 5px 20px #3d3d3d;
    transition: all.5s;
    background-image: url(${(props) => props.img || ''});
    background-size: contain;
    
`
// ${(props) => props.img || ''}
export const CardInfo = styled.span`
color: white;
font-size: 0.8rem;
`

export const CardImg = styled.img`
    width: 80%;
    height: 80%;
`