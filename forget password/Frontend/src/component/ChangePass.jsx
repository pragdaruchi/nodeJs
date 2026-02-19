import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ChangePass() {
  const [formdata, setFormdata] = useState({})
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formdata.newpass == formdata.confirmpass) {
      await axios.post("http://localhost:1002/changepass", formdata, {
        headers: {
          Authorization: token
        }
      }).then(() => {
        localStorage.removeItem("token")
        navigate("/login")
      })
    }
    else {
      alert("Old password and New Password Must be same")
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md border-t-4 border-purple-500">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Change Password</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="password" onChange={handleChange} placeholder="Enter Your Old Password" name="oldpass" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <input type="password" onChange={handleChange} placeholder="Enter Your New Password" name="newpass" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <input type="password" onChange={handleChange} placeholder="Confirm Your New Password" name="confirmpass" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition duration-300" >Submit</button>
        </form>
        <div className="mt-4 text-center">
          <button onClick={() => navigate("/profile")} className="text-sm text-purple-600 font-semibold hover:underline" >Back to Profile</button>
        </div>
      </div>
    </div>
  )
}
