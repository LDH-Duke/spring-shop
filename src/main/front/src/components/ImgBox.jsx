import styled from "styled-components";
import React from 'react'


export const ImgContainer = styled.div`
    display: flex;
    grid-area: a;
    width: 550px;
    height: 100%;
    border: 2px solid black;
    background-color: red;
    
`

export const ImgSilderWrap = styled.div`
    width: 15%;
    height: 100%;
    border: 1px solid yellow;
`
export const ImgWrap = styled.div`
    width: 85%;
    height: 100%;
    border: 1px solid yellow;
`



export const ImgBox = () => {
    return (
        <ImgContainer>
            <ImgSilderWrap />
            <ImgWrap />
        </ImgContainer>
    )
}
