import React, { useEffect, useState } from 'react'
import Aside from './Aside'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ViewTeacher() {

  const [record, setRecord] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async (e) => {
    await axios.get("http://localhost:1004/getData").then((res) => {
      setRecord(res.data.data)
    })
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:1004/deleteData?id=${id}`).then((res) => {
      let newData = record.filter((item) => item.id != id)
      setRecord(newData)
      alert(res.data.msg)
    })
  }

  const handleEdit = (id) => {
    let singleData = record.find((item) => item._id == id)
    navigate("/editteacher", { state: singleData })
  }
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white relative overflow-hidden">
      <Aside />
      <div className="flex-1 p-8 relative z-10">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white p-8">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">View Teachers</h1>
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-2"></div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-100 text-gray-700 text-sm">
                  <th className="p-4 text-left rounded-tl-xl">Name</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Experience</th>
                  <th className="p-4 text-left">Qualification</th>
                  <th className="p-4 text-center rounded-tr-xl">Actions</th>
                </tr>
              </thead>
              <tbody>
                {record.map((e, i) => (
                  <tr key={i} className="border-b hover:bg-green-50 transition">
                    <td className="p-4">{e.name}</td>
                    <td className="p-4">{e.subject}</td>
                    <td className="p-4">{e.experience} Years</td>
                    <td className="p-4">{e.qualification}</td>
                    <td className="p-4 text-center space-x-2">
                      <button onClick={() => handleEdit(e._id)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg shadow-sm transition">Edit</button>
                      <button onClick={() => handleDelete(e._id)} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg shadow-sm transition">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
