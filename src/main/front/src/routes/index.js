import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp, List, Detail } from './pages'
import { MousePointer } from '../components/MousePointer'
import { useCookies } from 'react-cookie'

const Router = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['id'])

    const [xy, setXY] = useState({
        x: 0,
        y: 0
    })

    const moveMouse = (e) => {
        setXY({ x: e.pageX, y: e.pageY })
    }

    return (
        <div onMouseMove={(e) => moveMouse(e)}>
            <MousePointer x={xy.x} y={xy.y} />
            <Routes>
                <Route path='/shop/list' element={<List mouse={xy} cookies={cookies} />} />
                <Route path='/shop/item/detail/:id' element={<Detail cookies={cookies} />} />
                <Route path='/shop/signin' element={<SignIn setCookie={setCookie} cookies={cookies} />} />
                <Route path='/shop/signup' element={<SignUp />} />
            </Routes>
        </div>
    )
}

export default Router;
