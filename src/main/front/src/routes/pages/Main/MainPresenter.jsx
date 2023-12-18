import React, { useState } from 'react'
import './Main.css'
import { DotContainer, Dot, } from '../../../components/Dot'
import { ModalContainer, ModalWrap, ModalItem } from '../../../components/Modal'
import { ListContainer, ListItem } from '../../../components/List'
import { CardContainer, CardInfo, CardImg } from '../../../components/Card'
import c1 from '../../../imgs/c1.jpg'
import { List } from './component/List'



export const MainPresenter = ({ mouse }) => {
    const [active, setActive] = useState(0);




    const datas = [
        { name: "title", img: c1, price: 10000 },
        { name: "title", img: c1, price: 10000 },
        { name: "title", img: c1, price: 10000 },
        { name: "title", img: c1, price: 10000 },
        { name: "title", img: c1, price: 10000 },
        { name: "title", img: c1, price: 10000 },
        { name: "title", img: c1, price: 10000 },
        { name: "title", img: c1, price: 10000 },
        { name: "title", img: c1, price: 10000 },
        { name: "title", img: c1, price: 10000 },
        { name: "title", img: c1, price: 10000 },
    ]


    const mouseEnter = (e) => {
        const { x, y, width, height } = e.target.getBoundingClientRect();
        const left = e.clientX - x;
        const top = e.clientY - y;
        const centerX = left - width / 2;
        const centerY = top - height / 2;

        e.target.style.transform = `perspective(1000px) rotateX(${(centerY / 10)}deg) rotateY(${-(centerX / 10)}deg)`

    }

    const mouseLeave = (e) => {

        e.target.style = 'transform : null'

        console.log("지금")
    }

    return (
        <div className='main-container'>
            <List>

            </List>


            {/* <ListContainer>
                {
                    datas.map((item, idx) => {
                        return (
                            <ListItem onMouseOver={(e) => mouseEnter(e)} img={item.img}>
                                <CardInfo>{item.name}</CardInfo>
                                <CardInfo>{item.price}</CardInfo>
                            </ListItem>

                        )
                    })
                }

            </ListContainer> */}
            {/* <CardContainer onMouseMove={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)} >
                <CardInfo>MORIENS DOUBLE BREASTED COAT awa567m(GREEN/BLUE)</CardInfo>
                <CardInfo>KRW 765,000</CardInfo>
            </CardContainer> */}
            <DotContainer onClick={() => active ? setActive(0) : setActive(1)} active={active} for='modal'>
                <Dot />
                <Dot />
                <Dot />
            </DotContainer>
            <ModalContainer active={active}>
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
