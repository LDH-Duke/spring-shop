import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Main, SignIn } from './pages'


const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/shop' element={<Main />} />
                <Route path='/shop/signin' element={<SignIn />} />
            </Routes>
        </div>
    )
}

export default Router;
