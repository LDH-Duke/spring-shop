import styled from "styled-components";
import React from 'react'

export const TextContainer = styled.div`
    width: 300px;
    height: 100%;
    color: #000000;
`

export const TextWrap = styled.div`
margin: 15px 0;
border: 1px solid black;
border-radius: 3px;
padding: 10px;
background-color: white;
height: ${(props)=> props.height || 'auto'};
overflow-y: scroll;
`

export const TextLabel = styled.label`
    font-weight: bold;
    font-size: ${(props) => props.size || '1.2rem'};
    color: ${(props)=>props.color ||'white'};
    
`

export const TextArea = styled.p`
    white-space: pre-wrap;
    font-size: 0.8rem;
`



export const Text = ({data}) => {
    return (// 이름, 설명, 디테일(원단 등), 가격
        <TextContainer>
            <TextWrap>
                <TextArea>{data.title}</TextArea>
            </TextWrap>
            <TextWrap>
                <TextArea>{data.explain}</TextArea>
            </TextWrap>
            <TextLabel>Details</TextLabel>
            <TextWrap>
                <TextArea>
                    {data.detail}
                </TextArea>
            </TextWrap>
            <TextLabel>Price</TextLabel>
            <TextWrap> 
                
                <TextArea>
                    {data.price}
                </TextArea>
            </TextWrap>
        </TextContainer>
    )
}
