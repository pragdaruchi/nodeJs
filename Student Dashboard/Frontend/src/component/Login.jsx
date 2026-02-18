import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()

  const [formdata, setFormdata] = useState({})

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:1004/student/login", formdata)
    if (res.data.auth) {
      navigate("/dashboard");
    } else {
      alert(res.data.msg);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[380px]">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Student Login</h1>
        <p className="text-center text-gray-500 text-sm mb-6">Enter your details to continue</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
            <input type="text" onChange={handleChange} placeholder="Enter your name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Student Class</label>
            <input type="text" onChange={handleChange} placeholder="Enter your Standard" name="classname" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Roll Number</label>
            <input type="text" onChange={handleChange} placeholder="Enter roll number" name="rollno" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" />
          </div>
          <button onClick={() => naviagte("/dashboard")} type="submit" className="bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md">Login</button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">Welcome Back 👋</p>
      </div>
    </div>
  );
}