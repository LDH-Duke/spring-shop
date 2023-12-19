import React from 'react'
import { MainPresenter } from '../Layout/MainLayout'
import { List } from '../../../components/List'
import './List.css'



export const ListPresenter = (props) => {

    /**
     * props 내용
     * 
    {
    datas,
    navigate,
    active,
    setActive,

    handleMouseEnter,
    handleMouseLeave,
    }
     */
    return (
        <div className='list-container'>

            <MainPresenter setActive={props.setActive} active={props.active}>
                {
                    <List props={props}>
                    </List>
                }
            </MainPresenter>
        </div>
    )
}
