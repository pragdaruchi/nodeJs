import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import AddTeacher from './component/AddTeacher'
import ViewTeacher from './component/ViewTeacher'
import EditTeacher from './component/EditTeacher'
import AddStudent from './component/AddStudent'
import ViewStudent from './component/ViewStudent'
import EditStudent from './component/EditStudent'
import Login from './component/Login'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login}></Route>
           <Route path='/dashboard' Component={Dashboard}></Route>
           <Route path='/addteacher' Component={AddTeacher}></Route>
           <Route path='/viewteacher' Component={ViewTeacher}></Route>
           <Route path='/editteacher' Component={EditTeacher}></Route>
           <Route path='/addstudent' Component={AddStudent}></Route>
           <Route path='/viewstudent' Component={ViewStudent}></Route>
           <Route path='/editstudent' Component={EditStudent}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
