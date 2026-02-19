import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
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
    await axios.post("http://localhost:1002/login", formdata, { withCredentials: true }).then((res) => {
      alert(res.data.msg)
      localStorage.setItem("token", res.data.token)
      if (res.data.token) {
        navigate("/dashboard")
      } else {
        navigate("/login")
      }
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="text" onChange={handleChange} value={formdata.email} placeholder="Enter Your Email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <input type="text" onChange={handleChange} value={formdata.password} placeholder="Enter Your Password" name="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition duration-300" >Login</button>
        </form>
        <div className="mt-4 text-center">
          <button onClick={() => navigate("/forgetpass")} className="text-sm text-purple-600 font-semibold hover:underline">Forget Password?</button>
        </div>
      </div>
    </div>
  )
}
