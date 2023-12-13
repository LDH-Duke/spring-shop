import React, { useState } from 'react'
import { SignPresenter } from './SignPresenter'
import axios from 'axios';
import userApi from '../../../api/user/user.js';


const SignContainer = () => {
    const [isLogin, setLogin] = useState(1);
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");


    const handleIdChange = (id) => {
        console.log(id)
        setId(id)
    }
    const handlePwChange = (pw) => {
        console.log(pw)
        setPw(pw)
    }

    const handleSignIn = async () => {
        const headers= {
            'Content-Type' : 'application/json',
        }

        const data = {
            'account': id,
            'pw': pw // 괴도키드
        }

        console.log('동작')
        const result = await userApi.Login(data, headers);
        console.log(result)

        console.log('동작 끝')
    }

    return (
        <SignPresenter isLogin={isLogin} onChangeId={handleIdChange} onChangePw={handlePwChange} handleSignIn={handleSignIn} />
    )
}

export default SignContainer;
