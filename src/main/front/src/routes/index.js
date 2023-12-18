import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Main, SignIn, SignUp } from './pages'
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
                <Route path='/shop' element={<Main mouse={xy} />} />
                <Route path='/item/detail/:id'/>
                <Route path='/shop/signin' element={<SignIn />} />
                <Route path='/shop/signup' element={<SignUp />} />
            </Routes>
        </div>
    )
}

export default Router;
