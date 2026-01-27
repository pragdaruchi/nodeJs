import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import AddAdmin from './component/AddAdmin'
import ViewAdmin from './component/ViewAdmin'
import EditAdmin from './component/EditAdmin'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/dashboard' Component={Dashboard}></Route>
          <Route path='/addAdmin' Component={AddAdmin}></Route>
          <Route path='/viewAdmin' Component={ViewAdmin}></Route>
          <Route path='/editAdmin' Component={EditAdmin}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

