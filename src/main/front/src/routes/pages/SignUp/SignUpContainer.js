import React, { useRef, useState } from 'react'
import { SignUpPresenter } from './SignUpPresenter.jsx'
import userApi from '../../../api/user/user.js';
import axios from 'axios';


const SignUpContainer = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] =useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [isEmail, setIsEmail] = useState(1);
    const [isId, setIsId] = useState(1);
    const [isPw, setIsPw] = useState(1);

    //email 정규식
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

    //id 입력 시 state 변경
    const handleIdChange = (id) => {
        console.log(id)
        setId(id)
    }

    //id 중복 핸들러
    const handleIdCheck = async () => {
        const headers = {
            'Content-Type': 'application/json',
        }
        const data = {
            'account': id,
        }

        console.log(data)

        const result = await userApi.IdCheck(encodeURI(data), headers)

        console.log(result)


    }

    //pw 입력 시 state 변경
    const handlePwChange = (pw) => {
        setPw(pw)
    }
    const handlePw2Change = (pw) => {
        setPwCheck(pw)
    }
    //pw 일치
    const handlePwCheck = () =>{
        if(pw != pwCheck){
            setIsPw(0)
            return ;
        }

        setIsPw(1);
    }


    //이름 입력 시 state 변경
    const handleNameChange = (name) => {
        setName(name)
    }

    //전화번호 입력 시 state 변경
    const handlePhoneChange = (phone) => {
        setPhone(phone)
    }

    //이메일 입력 시 state 변경
    const handleEmailChange = (useremail) => {
        setEmail(useremail)
    }

    //이메일 onBlur 시 유효성 검사
    const handleEmailCheck = () => {
        if (emailRegEx.test(email) == false) {
            setIsEmail(0)
            return;
        }
        setIsEmail(1)
    }

    const handleSignUp = async () => {
        const headers = {
            'Content-Type': 'application/json',
        }

        const data = {
            'account': id,
            'pw': pw,
            'name': name,
            'phone': phone,
            'email': email,
        }

        const result = userApi.SignUp(data, headers)

    }

    return (
        <SignUpPresenter
            isId={isId}
            isEmail={isEmail}
            isPw={isPw}

            onChangeId={handleIdChange}
            onChangePw={handlePwChange}
            onChangePw2={handlePw2Change}
            onChangeName={handleNameChange}
            onChangePhone={handlePhoneChange}
            onChangeEmail={handleEmailChange}

            handleSignUp={handleSignUp}
            handleIdCheck={handleIdCheck}
            handlePwCheck={handlePwCheck}
            handleEmailCheck={handleEmailCheck} />
    )
}

export default SignUpContainer;
