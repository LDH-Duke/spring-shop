import React from 'react'
import { InputContainer, InputField, InputLabel } from '../../../components/Input'

export const MainPresenter = () => {
    return (
        <div className='main'>
            <InputContainer>
                <InputLabel>이름</InputLabel>
                <InputField type="text" />
            </InputContainer>
        </div>
    )
}
