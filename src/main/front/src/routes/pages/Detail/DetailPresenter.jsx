import React from 'react'
import './Detail.css'
import { ImgBox } from '../../../components/ImgBox'
import { Text } from '../../../components/Text'


export const DetailPresenter = () => {
    return (
        <div className='detail-container'>
            <div className='detail-wrap'>
                <ImgBox />
                <Text />
            </div>
        </div>
    )
}
