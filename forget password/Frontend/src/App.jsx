import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/Dashboard'
import Profile from './component/Profile'
import ChangePass from './component/ChangePass'
import ForgetPass from './component/ForgetPass'
import VeryfyPass from './component/VeryfyPass'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Register}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/dashboard' Component={Dashboard}></Route>
          <Route path='profile' Component={Profile}></Route>
          <Route path='/changepass' Component={ChangePass}></Route>
          <Route path='/forgetpass' Component={ForgetPass}></Route>
          <Route path='/veryfypass' Component={VeryfyPass}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
