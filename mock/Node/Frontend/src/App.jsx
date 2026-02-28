import React from 'react'
import Register from './component/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Register}></Route>
          <Route path='/login' Component={Login}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
