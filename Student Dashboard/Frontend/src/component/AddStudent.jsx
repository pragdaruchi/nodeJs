import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Aside from './Aside'

export default function AddStudent() {
  const [formdata, setFormdata] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:1004/student/post", formdata).then((res) => {
      alert(res.data.msg)
      navigate("/viewstudent")
    })
  }
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white relative overflow-hidden">
      <Aside />
      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-4xl grid md:grid-cols-2 bg-white/90 backdrop-blur-xl rounded-[28px] shadow-xl border border-white overflow-hidden">
          <div className="hidden md:flex flex-col justify-center p-10 bg-gradient-to-br from-emerald-400 to-green-400 text-white">
            <h2 className="text-3xl font-bold leading-tight">Manage <br /> Students</h2>
            <p className="mt-4 text-green-50 text-sm leading-relaxed max-w-xs">Add and organize student information easily.</p>
            <div className="mt-8 w-24 h-24 bg-white/25 rounded-2xl backdrop-blur-md flex items-center justify-center shadow-inner">
              <span className="text-4xl">🎓</span>
            </div>
          </div>
          <div className="p-10 bg-white">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">Student Registration</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-3"></div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="name" value={formdata.name} onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition"/>
              <input type="text" name="gender" value={formdata.gender} onChange={handleChange} placeholder="Gender" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition"/>
              <input type="text" name="classname" value={formdata.classname} onChange={handleChange} placeholder="Class Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition"/>
              <input type="text" name="rollno" value={formdata.rollno} onChange={handleChange} placeholder="Roll Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition"/>
              <button type="submit" className="w-full bg-gradient-to-r from-emerald-400 to-green-400 hover:from-green-500 hover:to-emerald-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition active:scale-95" >Register Student</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
