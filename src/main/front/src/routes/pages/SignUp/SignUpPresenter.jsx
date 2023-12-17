import React from 'react'
import { InputContainer, InputLabel, InputField } from '../../../components/Input'
import { Button, LinkButton } from '../../../components/Button'
import './SignUp.css'

export const SignUpPresenter = (
    {
        isId,
        isPw,
        isEmail,

        onChangeId,
        onChangePw,
        onChangePw2,
        onChangeName,
        onChangePhone,
        onChangeEmail,

        handleSignUp,
        handleIdCheck,
        handlePwCheck,
        handleEmailCheck,
    }
) => {

    const signup = (e) => {

        if(isId == 0 || isPw == 0 || isEmail == 0){
            console.log("입력 값 오류");
            return 0;
        }
        handleSignUp();
    }

    const activeButton = () => {
        
        
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
                                    null
                                    :
                                    <div className='msg'>
                                        <span>존재하는 아이디입니다.</span>
                                    </div>
                            }

                        </InputContainer>
                        <InputContainer direction="column">
                            <InputLabel>Password</InputLabel>
                            <InputField type='password' onChange={(e) => onChangePw(e.target.value)} onBlur={handlePwCheck} />
                        </InputContainer>
                        <InputContainer direction="column">
                            <InputLabel>Password Check</InputLabel>
                            <InputField type='password' onChange={(e) => onChangePw2(e.target.value)} onBlur={handlePwCheck} />
                            {
                                isPw ?
                                    null
                                    :
                                    <div className='msg'>
                                        <span>비밀번호가 일치하지 않습니다.</span>
                                    </div>
                            }
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
                        <Button type='button' onClick={signup}>Sign up</Button>
                    </form>
                </div>
            </div>
        </div >

    )
}
