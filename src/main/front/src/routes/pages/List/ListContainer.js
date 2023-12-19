import React, { useState } from 'react'
import { ListPresenter } from './ListPresenter'
import c1 from '../../../imgs/c1.jpg'
import { useNavigate } from 'react-router-dom';

const ListContainer = ({
    mouse // 마우스 움직임
}) => {

    const navigate = useNavigate();
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


    //card 움직임
    const handleMouseEnter = (e) => {
        const { x, y, width, height } = e.target.getBoundingClientRect();
        const left = e.clientX - x;
        const top = e.clientY - y;
        const centerX = left - width / 2;
        const centerY = top - height / 2;

        e.target.style.transform = `perspective(1000px) rotateX(${(centerY / 10)}deg) rotateY(${-(centerX / 10)}deg)`
    }
    const handleMouseLeave = (e) => {
        e.target.style = 'transform : null'
    }


    return <ListPresenter
        datas={datas}
        navigate={navigate}
        active={active}
        setActive={setActive}

        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
    />
}

export default ListContainer
