import React from 'react'
import { InputContainer, InputLabel, InputField } from '../../../components/Input'
import { Button, LinkButton } from '../../../components/Button'
import './SignUp.css'

export const SignUpPresenter = (
    {
        isId,
        isEmail,

        onChangeId,
        onChangePw,
        onChangeName,
        onChangePhone,
        onChangeEmail,

        handleSignIn,
        handleIdCheck,
        handleEmailCheck,
    }
) => {

    const siginup = (e) => {
        handleSignIn();
    }



    return (
        <div className='signup-container'>
            <div className='signup-box'>
                <div className='signup-title'>
                    <span>
                        Sign Up
                    </span>
                </div>
                <div className='sginin-form'>
                    <form>
                        <InputContainer direction="column">
                            <InputLabel>Account</InputLabel>
                            <div className='signup-id'>
                                <InputField type='text' onChange={(e) => onChangeId(e.target.value)} />
                                <Button type="button" size="0.8rem" onClick={handleIdCheck}>중복(img)</Button>
                            </div>


                            {
                                isId ?
                                    <div className='msg'>
                                        <span>존재하는 아이디입니다.</span>
                                    </div>
                                    :
                                    null
                            }

                        </InputContainer>
                        <InputContainer direction="column">
                            <InputLabel>Password</InputLabel>
                            <InputField type='password' onChange={(e) => onChangePw(e.target.value)} />
                        </InputContainer>
                        <InputContainer direction="column">
                            <InputLabel>Name</InputLabel>
                            <InputField type='text' onChange={(e) => onChangeName(e.target.value)} />
                        </InputContainer>
                        <InputContainer direction="column">
                            <InputLabel>Phone</InputLabel>
                            <InputField type='text' onChange={(e) => onChangePhone(e.target.value)} />
                        </InputContainer>
                        <InputContainer direction="column">
                            <InputLabel>E-mail</InputLabel>
                            <InputField type='text' onChange={(e) => onChangeEmail(e.target.value)} onBlur={handleEmailCheck} />
                            {
                                isEmail ?
                                    null
                                    :
                                    <div className='msg'>
                                        <span>이메일 형식에 맞지 않습니다.</span>
                                    </div>
                            }
                        </InputContainer>
                        <Button as={'a'} href='/shop/signup'>Sign up</Button>
                    </form>
                </div>
            </div>
        </div >

    )
}
