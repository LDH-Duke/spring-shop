import React, { useState } from 'react'
import { SignInPresenter } from './SignInPresenter.jsx'
import axios from 'axios';
import userApi from '../../../api/user/user.js';
import { useNavigate } from 'react-router-dom';


const SignInContainer = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();


    const handleIdChange = (id) => {
        setId(id)
    }
    const handlePwChange = (pw) => {
        setPw(pw)
    }

    const handleSignIn = async () => {
        const headers = {
            'Content-Type': 'application/json',
        }
        const data = {
            'account': id,
            'pw': pw // 괴도키드
        }
        const result = await userApi.Login(data, headers);

        console.log(result)

        if (result === 400) {
            return console.log("비밀번호 에러")
        }
        if (result === 404) {
            return console.log("존재하지 않는 아이디")
        }

        return navigate("/main")

    }

    return (
        <SignInPresenter onChangeId={handleIdChange} onChangePw={handlePwChange} handleSignIn={handleSignIn} />
    )
}

export default SignInContainer;
