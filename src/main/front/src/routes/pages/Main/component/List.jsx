import React from 'react'
import { ListContainer, ListItem } from '../../../../components/List'
import c1 from '../../../../imgs/c1.jpg'
import { CardInfo } from '../../../../components/Card'
import { useNavigate } from 'react-router-dom'

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

    const navigate = useNavigate();

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

        <div className='main-view'>
            <ListContainer>
                {
                    datas.map((item, idx) => {
                        return (
                            <ListItem 
                            onMouseMove={(e) => mouseEnter(e)} 
                            img={item.img} 
                            onClick={()=>navigate(`/item/detail/${idx}`)}
                            onMouseLeave={(e)=>{mouseLeave(e)}}
                            >
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
