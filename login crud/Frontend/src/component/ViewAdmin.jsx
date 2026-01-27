import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ViewAdmin() {
  const [record, setRecord] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await axios.get("http://localhost:1007/getData").then((res) => {
      setRecord(res.data.data)
    })
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:1007/deleteData?id=${id}`).then((res) => {
      let newData = record.filter((item) => item.id != id)
      setRecord(newData)
      alert(res.data.msg)
    })
  }

  const handleEdit = (id) => {
    let singleData = record.find((item) => item._id == id)
    navigate("/editAdmin", { state: singleData })
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-5">
          <h4 className="text-2xl font-semibold text-slate-800">View Admin</h4>
          <span className="text-sm text-slate-500">Total Records: {record.length}</span>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 border-b">
              <tr>
                <th className="px-5 py-3 text-left font-semibold text-slate-700">Name</th>
                <th className="px-5 py-3 text-left font-semibold text-slate-700">Age</th>
                <th className="px-5 py-3 text-left font-semibold text-slate-700">Email</th>
                <th className="px-5 py-3 text-left font-semibold text-slate-700">Password</th>
                <th className="px-5 py-3 text-center font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {record.map((e, i) => (
                <tr key={i} className="border-b last:border-none  hover:bg-indigo-50/40 transition">
                  <td className="px-5 py-4 font-medium text-slate-800">{e.name}</td>
                  <td className="px-5 py-4 text-slate-700">{e.age}</td>
                  <td className="px-5 py-4 text-slate-700 break-all">{e.mail}</td>
                  <td className="px-5 py-4 text-slate-700">{e.password}</td>
                  <td className="px-5 py-4">
                    <div className="flex justify-center gap-2">
                      <button onClick={() => handleEdit(e._id)} className="px-4 py-1.5 rounded-md text-xs font-medium  text-indigo-700 bg-indigo-100  hover:bg-indigo-200 transition">Edit</button>
                      <button onClick={() => handleDelete(e._id)} className="px-4 py-1.5 rounded-md text-xs font-medium  text-red-600 bg-red-100  hover:bg-red-200 transition">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );

}
