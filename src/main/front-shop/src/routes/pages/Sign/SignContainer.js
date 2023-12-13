import React, { useState } from 'react'
import { SignPresenter } from './SignPresenter'
import axios from 'axios';

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

        const data = {
            'account': id,
            'pw': pw // 괴도키드
        }

        console.log('동작')
        // await fetch('http://localhost:8080/shop/siginin', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then((res) => {
        //         console.log(res)
        //     })
        //     .then(() => {
        //         console.log("전송 완료")
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     });

        axios.post('http://localhost8080/shop/signin')
        try {
            const res = await axios.post('http://localhost:8080/shop/siginin', data);
            console.log("전송완료")

        } catch (e) {
            console.log(e)
        }

        console.log('동작 끝')
    }

    return (
        <SignPresenter isLogin={isLogin} onChangeId={handleIdChange} onChangePw={handlePwChange} handleSignIn={handleSignIn} />
    )
}

export default SignContainer;
