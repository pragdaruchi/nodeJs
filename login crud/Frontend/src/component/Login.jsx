import axios from "axios";
import React, { useState } from "react";
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
    let res = await axios.post("http://localhost:1007/login", formdata);
    if (res.data.auth) {
      navigate("/dashboard");
    } else {
      alert(res.data.msg);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={formdata.email} placeholder="Enter Your Email" name="email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="number" onChange={handleChange} value={formdata.password} placeholder="Enter Your Password" name="password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Log In</button>
        </form>
      </div>
    </div>
  );
}