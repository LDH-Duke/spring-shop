import React, { useEffect, useState } from 'react'
import { SignInPresenter } from './SignInPresenter.jsx'
import axios from 'axios';
import userApi from '../../../api/user/user.js';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


const SignInContainer = ({
    setCookie,
    cookies
}) => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [err, setErr] = useState(1);
    let cookie = {}


    useEffect(() => {
        if (document.cookie != '') {
            window.confirm("로그인 되어있습니다.")
            navigate("/shop")
        }
    }, [])

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
            'pw': pw
        }
        const result = await userApi.Login(data, headers);


        if (result.code === 400) {
            console.log("비밀번호 에러")
            setErr(0)
            return 0;
        }
        if (result.code === 404) {
            console.log("존재하지 않는 아이디")
            setErr(0)
            return 0;
        }
        if (result.code == 200) {
            // cookie = JSON.parse(decodeURIComponent(document.cookie).substring(decodeURIComponent(document.cookie).indexOf("=") + 1))
            cookie = document.cookie;
            console.log(cookie);
        }
        console.log(result.data.value);

        setCookie('1', result.data.value, {
            path: result.data.path,
            maxAge: result.data.maxAge,
        })


        return navigate("/shop/list")

    }

    return (
        <SignInPresenter err={err} onChangeId={handleIdChange} onChangePw={handlePwChange} handleSignIn={handleSignIn} />
    )
}

export default SignInContainer;
