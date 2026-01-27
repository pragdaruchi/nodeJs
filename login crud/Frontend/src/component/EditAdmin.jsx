import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function EditAdmin() {
  const [formdata,setFormdata] = useState({})

  const LocationObj = useLocation();
  const navigate = useNavigate()

   useEffect(()=>{
    if (LocationObj.state) {
      setFormdata(LocationObj.state)
    }
   },[])
   
  const handleChange = (e)=>{
    setFormdata({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:1007/updateData?id=${formdata}`,formdata).then((res) => {
      alert(res.data.msg)
      navigate("/viewAdmin")
    })
  }

return (
  <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-2xl font-semibold text-center text-slate-800 mb-1">Edit Admin</h1>
      <p className="text-sm text-center text-slate-500 mb-6">Update admin details</p>
      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Name</label>
          <input type="text" name="name" value={formdata.name} onChange={handleChange} placeholder="Enter your name" className="w-full px-4 py-3 rounded-lg border border-slate-300  bg-slate-50  focus:bg-white focus:outline-none  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  transition-all"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Age</label>
          <input type="number" name="age" value={formdata.age} onChange={handleChange} placeholder="Enter your age" className="w-full px-4 py-3 rounded-lg border border-slate-300  bg-slate-50  focus:bg-white focus:outline-none  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  transition-all"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Password</label>
          <input type="text" name="password" value={formdata.password} onChange={handleChange} placeholder="Enter your password" className="w-full px-4 py-3 rounded-lg border border-slate-300  bg-slate-50  focus:bg-white focus:outline-none  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  transition-all"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
          <input type="text" name="mail" value={formdata.mail} onChange={handleChange} placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg border border-slate-300  bg-slate-50  focus:bg-white focus:outline-none  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  transition-all"/>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl  font-medium tracking-wide  hover:bg-indigo-700  active:scale-[0.98]  shadow-md hover:shadow-lg  transition-all duration-200">Update Admin</button>
      </form>
    </div>
  </div>
);

}