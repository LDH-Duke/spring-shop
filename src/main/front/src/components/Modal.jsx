import { Link } from "react-router-dom";
import styled from "styled-components";
import "../Common.css"

export const ModalContainer = styled.nav`
position: relative;
left: -21%;
background-color: black;
width: 21%;
height: 100%;
z-index: 1;
transition: .5s;
${(props) => props.active ?
        `transform : translateX(100%)`
        :
        null
    }

`

export const ModalWrap = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
justify-content: center;
`

export const ModalItem = styled(Link)`
color: var(--backgroundMain-color);
margin: 30px 0;
font-size:30px;
font-weight: bolder;
`