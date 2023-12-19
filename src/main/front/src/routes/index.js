import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp, List, Detail } from './pages'
import { MousePointer } from '../components/MousePointer'

const Router = () => {
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
                <Route path='/shop/list' element={<List mouse={xy} />} />
                <Route path='/item/detail/:id' element={<Detail />} />
                <Route path='/shop/signin' element={<SignIn />} />
                <Route path='/shop/signup' element={<SignUp />} />
            </Routes>
        </div>
    )
}

export default Router;
