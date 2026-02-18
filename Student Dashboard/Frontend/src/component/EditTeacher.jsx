import React, { useEffect, useState } from 'react'
import Aside from './Aside'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Editeacher() {
    const [formdata, setFormdata] = useState({})
    const navigate = useNavigate()

    const locationObj = useLocation()

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

    const handleUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:1004/updateData?id=${formdata}`, formdata).then((res) => {
            alert(res.data.msg)
            navigate("/viewteacher")
        })
    }
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white relative overflow-hidden">
            <Aside />
            <div className="flex-1 flex items-center justify-center px-6 py-8 relative z-10">
                <div className="w-full max-w-4xl grid md:grid-cols-2 bg-white/95 backdrop-blur-lg rounded-[26px] shadow-xl border border-white overflow-hidden">
                    <div className="hidden md:flex flex-col justify-center p-8 bg-gradient-to-br from-emerald-400 to-green-400 text-white">
                        <h2 className="text-3xl font-semibold leading-tight">Update <br /> Teacher</h2>
                        <p className="mt-4 text-green-50 text-sm max-w-xs leading-relaxed">Keep teacher information updated with a professional dashboard interface. </p>
                        <div className="mt-6 w-20 h-20 bg-white/25 rounded-2xl backdrop-blur-md flex items-center justify-center shadow-inner">
                            <span className="text-3xl">✏️</span>
                        </div>
                    </div>
                    <div className="p-8 bg-white">
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-800">Update Details</h2>
                            <div className="w-10 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-3"></div>
                        </div>
                        <form onSubmit={handleUpdate} className="space-y-4">
                            <input type="text" name="name" value={formdata.name} onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition" />
                            <input type="text" name="subject" value={formdata.subject} onChange={handleChange} placeholder="Subject" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition" />
                            <input type="text" name="qualification" value={formdata.qualification} onChange={handleChange} placeholder="Qualification" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition" />
                            <input type="text" name="experience" value={formdata.experience} onChange={handleChange} placeholder="Experience (Years)" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition" />
                            <button type="submit" className="w-full bg-gradient-to-r from-emerald-400 to-green-400 hover:from-green-500 hover:to-emerald-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition active:scale-95" >Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}