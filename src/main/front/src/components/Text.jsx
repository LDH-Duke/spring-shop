import styled from "styled-components";
import React from 'react'

export const TextContainer = styled.div`
    grid-area: b;
    width: 300px;
    height: 100%;
    border:2px solid black;
    color: white;
    overflow-y: scroll;    
    z-index: 1;
`

export const TextWrap = styled.div`

`

export const TextArea = styled.p`
    
`



export const Text = () => {
    return (
        <TextContainer>
            <TextWrap>
                <TextArea>clothes name so long name</TextArea>
            </TextWrap>
            <TextWrap>
                <TextArea>‘The most New Balance shoe ever’ says it all, right? No, actually. The 574 might be our unlikeliest icon. The 574 was built to be a reliable shoe that could do many things well rather than as a platform for revolutionary technology, or as a premium materials showcase. This unassuming, unpretentious versatility launched the 574 into the ranks of all-time greats. As a hybrid road/trail design built on a wider last than the previous generation’s narrow racing silhouettes, the 574 offered a uniquely versatile mix of new, different, uncomplicated, rugged, durable, and comfortable that was adopted as a closet staple across the globe. That’s why today, the 574 is synonymous with the boundary-defying New Balance style, and worn by anyone.</TextArea>
            </TextWrap>
            <TextWrap>
                <TextArea>Details</TextArea>
                <TextArea>EVA Midsole foam uses approximately 3% bio-based content made from renewable sources to help reduce our carbon footprint
                    Suede/mesh upper
                    ENCAP midsole cushioning combines soft foam with a durable polyurethane rim to deliver all-day support
                    Rubber outsole contains 5% recycled rubber
                    Adjustable lace closure for a customized fit
                    265.4 grams (9.4 oz)
                    Suede/mesh upper
                    Vamp, collar and tongue mesh are 100% recycled polyester</TextArea>
            </TextWrap>


        </TextContainer>
    )
}
