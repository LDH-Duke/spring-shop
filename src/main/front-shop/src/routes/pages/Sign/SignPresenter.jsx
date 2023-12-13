import React from 'react'
import { InputContainer, InputLabel, InputField } from '../../../components/Input'
import { Button } from '../../../components/Button'
import './Sign.css'

export const SignPresenter = (
    {
        isLogin,
        onChangeId,
        onChangePw,
        handleSignIn,
    }
) => {

    const siginin = (e) =>{
        handleSignIn();
    }



    return (
        <>
            {
                isLogin ?
                    <div className='sign-container'>
                        <div className='sign-box'>
                            <div className='signin-title'>
                                <span>
                                    Sign In
                                </span>
                            </div>
                            <div className='sginin-form'>
                                {/* onSubmit={signin} */}
                                <form>
                                    <InputContainer>
                                        <InputLabel>Account</InputLabel>
                                        <InputField type='text' onChange={(e) => onChangeId(e.target.value)} />
                                    </InputContainer>
                                    <InputContainer>
                                        <InputLabel>Password</InputLabel>
                                        <InputField type='password' onChange={(e) => onChangePw(e.target.value)} />
                                    </InputContainer>
                                    <Button type='submit'>Sign in</Button>
                                </form>
                                <p onClick={siginin}>aaaa</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div id='sign-container'>

                    </div>
            }
        </>
    )
}
