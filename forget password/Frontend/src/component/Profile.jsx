import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const [record, setRecord] = useState({})
  const navigate = useNavigate()
  let token = localStorage.getItem("token")

  useEffect(() => {
    if (!token) {
      navigate("/profile")
    }
    else {
      fetchdata()
    }
  }, [])

  const fetchdata = async () => {
    await axios.get("http://localhost:1002/profile", {
      headers: {
        Authorization: token
      }
    }).then((res) => {
      setRecord(res.data.profile.user)
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md border-t-4 border-purple-500">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">My Profile</h1>
        <div className="space-y-4">
          <div className="flex justify-between bg-purple-50 p-3 rounded-lg items-center">
            <span className="font-semibold text-purple-700">Name</span>
            <span className="text-gray-900">{record.name}</span>
          </div>
          <div className="flex justify-between bg-purple-50 p-3 rounded-lg items-center">
            <span className="font-semibold text-purple-700">Age</span>
            <span className="text-gray-900">{record.age}</span>
          </div>
          <div className="flex justify-between bg-purple-50 p-3 rounded-lg items-center">
            <span className="font-semibold text-purple-700">Email</span>
            <span className="text-gray-900">{record.email}</span>
          </div>
          <div className="flex justify-between bg-purple-50 p-3 rounded-lg items-center">
            <span className="font-semibold text-purple-700">Password</span>
            <span className="text-gray-900">••••••••</span>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <button onClick={() => navigate("/changepass")} className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg font-semibold transition duration-300">Change Password</button>
        </div>
      </div>
    </div>
  )
}
