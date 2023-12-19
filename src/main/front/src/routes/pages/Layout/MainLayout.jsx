import React, { Children, useState } from 'react'
import './Main.css'
import { DotContainer, Dot, } from '../../../components/Dot'
import { ModalContainer, ModalWrap, ModalItem } from '../../../components/Modal'





export const MainPresenter = (props) => {
    // const [active, setActive] = useState(0);

    return (
        <div className='main-container'>
            {props.children}
            <DotContainer onClick={() => props.active ? props.setActive(0) : props.setActive(1)} active={props.active} for='modal'>
                <Dot />
                <Dot />
                <Dot />
            </DotContainer>
            <ModalContainer active={props.active}>
                <ModalWrap>
                    <ModalItem>item1</ModalItem>
                    <ModalItem>item2</ModalItem>
                    <ModalItem>item3</ModalItem>
                    <ModalItem>item4</ModalItem>
                </ModalWrap>
            </ModalContainer>
        </div>

    )
}
