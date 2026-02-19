import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
  const [formdata, setFormdata] = useState({})
  const navigate = useNavigate()


  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:1002/register", formdata).then((res) => {
      alert(res.data.msg)
      navigate("/login")
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" onChange={handleChange} value={formdata.name} placeholder="Enter Your Name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" onChange={handleChange} value={formdata.age} placeholder="Enter Your Age" name="age" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" onChange={handleChange} value={formdata.email} placeholder="Enter Your Email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="text" onChange={handleChange} value={formdata.password} placeholder="Enter Your Password" name="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300" >Register</button>
          <p className="text-center text-sm text-gray-600">Already have an account?
            <a href="/login" className="text-blue-500 font-semibold hover:underline ml-1">Login</a>
          </p>
        </form>
      </div>
    </div>
  )
}
