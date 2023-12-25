import styled from "styled-components";
import { CardContainer, CardInfo } from "./Card";
import React from 'react'

export const ListLayout = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: ${(props) => props.active ? '80%' : '100%'};
    height: 100%;
    right: 0;
    z-index: 1;
    transition: all.5s;
    overflow-y: scroll;
    -ms-overflow-style: none;
`

export const ListContainer = styled.ul`
    position: absolute;
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns || 3}, 1fr);
    grid-auto-rows: 50%;
    grid-gap: 5% 20%;
    width: 70%;
    height: ${(props) => props.active ? '80%' : '100%'};
    transition: all.5s;
`

export const ListItem = styled(CardContainer)`
    width: 100%;
    height: 84.5%;
`

export const ItemLabel = styled(CardInfo)`
    
`

export const List = (props) => {
    const {
        datas,
        navigate,
        active,

        handleMouseEnter,
        handleMouseLeave,
    } = props.props;

    return (
        <ListLayout active={active}>
            <ListContainer active={active}>
                {
                    datas.map((item, idx) => {
                        return (
                            <ListItem
                                onMouseMove={(e) => handleMouseEnter(e)}
                                img={item.img_1}
                                onClick={() => navigate(`/shop/item/detail/${item.id}`)}
                                onMouseLeave={(e) => { handleMouseLeave(e) }}
                            >
                                <ItemLabel>{item.name}</ItemLabel><br />
                                <ItemLabel>{item.price}</ItemLabel>
                            </ListItem>
                        )
                    })
                }

            </ListContainer>
        </ListLayout>
    )
}