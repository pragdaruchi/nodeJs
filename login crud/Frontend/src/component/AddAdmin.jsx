import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddAdmin() {
    const navigate = useNavigate();

    const [formdata, setFormdata] = useState({});

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:1007/postData", formdata).then((res) => {
            alert(res.data.msg);
            navigate("/viewAdmin");
        });
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center text-slate-800 mb-1">Add Admin</h2>
                <p className="text-sm text-center text-slate-500 mb-6">Fill admin details below</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Name</label>
                        <input type="text" name="name" value={formdata.name} onChange={handleChange} placeholder="Enter name" className="w-full px-4 py-3 rounded-lg border border-slate-300  bg-slate-50  focus:bg-white focus:outline-none  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Age</label>
                        <input type="number" name="age" value={formdata.age} onChange={handleChange} placeholder="Enter age" className="w-full px-4 py-3 rounded-lg border border-slate-300  bg-slate-50  focus:bg-white focus:outline-none  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
                        <input type="text" name="mail" value={formdata.mail} onChange={handleChange} placeholder="Enter email" className="w-full px-4 py-3 rounded-lg border border-slate-300  bg-slate-50  focus:bg-white focus:outline-none  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Password</label>
                        <input type="number" name="password" value={formdata.password} onChange={handleChange} placeholder="Enter password" className="w-full px-4 py-3 rounded-lg border border-slate-300  bg-slate-50  focus:bg-white focus:outline-none  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  transition-all" />
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl  font-medium tracking-wide  hover:bg-indigo-700  active:scale-[0.98]  shadow-md hover:shadow-lg  transition-all duration-200" >Add Admin</button>
                </form>
            </div>
        </div>
    );

}
