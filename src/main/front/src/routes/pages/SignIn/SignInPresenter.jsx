import React from 'react'
import { InputContainer, InputLabel, InputField } from '../../../components/Input'
import { Button, LinkButton } from '../../../components/Button'
import './SignIn.css'

export const SignInPresenter = (
    {
        onChangeId,
        onChangePw,
        handleSignIn,
    }
) => {

    const siginin = (e) => {
        e.preventDefault();
        handleSignIn();
    }

    return (
        <div className='signin-container'>
            <div className='sign-box'>
                <div className='signin-title'>
                    <span>
                        Sign In
                    </span>
                </div>
                <div className='sginin-form'>

                    <form>
                        <InputContainer direction="column">
                            <InputLabel>Account</InputLabel>
                            <InputField type='text' onChange={(e) => onChangeId(e.target.value)} />
                        </InputContainer>
                        <InputContainer direction="column">
                            <InputLabel>Password</InputLabel>
                            <InputField type='password' onChange={(e) => onChangePw(e.target.value)} />
                        </InputContainer>
                        <Button type='button' onClick={siginin}>Sign in</Button>
                        <Button color='white' as={'a'} href='/shop/signup'>Sign up</Button>
                    </form>
                </div>
            </div>
        </div >

    )
}
