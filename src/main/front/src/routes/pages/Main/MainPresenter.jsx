import React, { useState } from 'react'
import './Main.css'
import { DotContainer, Dot } from '../../../components/Dot'


export const MainPresenter = () => {


    return (
        <div className='main-container'>
            <div className='dot'>
                <DotContainer>
                    <Dot/>
                    <Dot/>
                    <Dot/>
                </DotContainer>
            </div>
        </div>
    )
}
