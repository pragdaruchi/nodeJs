import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Aside from './Aside'

export default function EditStudent() {

    const [formdata, setFormdata] = useState({})
    const locationObj = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (locationObj.state) {
            setFormdata(locationObj.state)
        }
    }, [])

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:1004/student/update?id=${formdata}`, formdata).then((res) => {
            alert(res.data.msg)
            navigate("/viewstudent")
        })
    }
    return (
        <div className="flex items-center min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white relative overflow-hidden">
            <Aside />
            <div className="flex-1 p-8 relative z-10 flex justify-center items-start">
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white p-8 w-full max-w-lg">
                    <div className="mb-6">
                        <h1 className="text-2xl font-semibold text-gray-800">Edit Student</h1>
                        <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-2"></div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Name</label>
                            <input type="text" name="name" value={formdata.name} onChange={handleChange} placeholder="Enter Student Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-400 focus:ring-1 focus:ring-green-300 outline-none transition" /></div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Gender</label>
                            <input type="text" name="gender" value={formdata.gender} onChange={handleChange} placeholder="Enter Gender" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-400 focus:ring-1 focus:ring-green-300 outline-none transition" /></div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Class</label>
                            <input type="text" name="classname" value={formdata.classname} onChange={handleChange} placeholder="Enter Class Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-400 focus:ring-1 focus:ring-green-300 outline-none transition" /></div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Roll No</label>
                            <input type="text" name="rollno" value={formdata.rollno} onChange={handleChange} placeholder="Enter Roll Number" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-400 focus:ring-1 focus:ring-green-300 outline-none transition" /></div>
                        <button type="submit" className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-sm transition">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}