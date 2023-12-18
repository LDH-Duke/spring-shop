import React from 'react'
import { ListContainer, ListItem } from '../../../../components/List'
import c1 from '../../../../imgs/c1.jpg'
import { CardInfo } from '../../../../components/Card'

export const List = () => {
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
    return (
        <div className='main-view'>
            <ListContainer>
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

            </ListContainer>
        </div>

    )
}
