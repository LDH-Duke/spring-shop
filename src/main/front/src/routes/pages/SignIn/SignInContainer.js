import React, { useEffect, useState } from 'react'
import { SignInPresenter } from './SignInPresenter.jsx'
import axios from 'axios';
import userApi from '../../../api/user/user.js';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


const SignInContainer = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [err, setErr] = useState(1);
    const [cookies, setCookie, removeCookie] = useCookies(['id'])


    useEffect(() => {
        if (cookies.user != null) {
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

        console.log(result)

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

        setCookie('user', 'user', {
            path: result.data.path,
            maxAge: result.data.maxAge,
        })


        return navigate("/shop")




    }

    return (
        <SignInPresenter err={err} onChangeId={handleIdChange} onChangePw={handlePwChange} handleSignIn={handleSignIn} />
    )
}

export default SignInContainer;
