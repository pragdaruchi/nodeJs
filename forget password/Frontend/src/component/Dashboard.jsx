import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex bg-[#f4f6fb]">
      <aside className="w-72 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="px-8 py-8 border-b border-gray-100 flex flex-col items-center">
          <img src="https://i.pravatar.cc/150?img=32" alt="Profile" className="w-20 h-20 rounded-full object-cover shadow-md border-4 border-indigo-100" />
          <h2 className="mt-4 text-lg font-semibold text-gray-800">Ruchi Pragda</h2>
          <p className="text-sm text-gray-500">Frontend Developer</p>
        </div>
        <nav className="flex-1 px-6 py-6 space-y-1 text-[15px] text-gray-600">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-50 text-indigo-600 font-semibold border-l-4 border-indigo-600">📊 Dashboard
          </div>
          <div onClick={() => navigate("/profile")} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 cursor-pointer transition">👤 Profile</div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 cursor-pointer transition">📈 Analytics</div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 cursor-pointer transition">📁 Reports</div>
          <div className="mt-10 flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 cursor-pointer transition" onClick={() => navigate("/login")}>🚪 Log Out</div>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-12 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">Dashboard Overview</h1>
            <p className="text-sm text-gray-500 mt-1">Welcome back, here’s what’s happening today.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <span className="text-gray-600 text-xl">🔔</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">3</span>
            </div>
          </div>
        </header>
        <main className="px-12 py-10 space-y-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">Total Users</p>
                <span className="text-2xl">👥</span>
              </div>
              <h2 className="text-4xl font-semibold mt-4 text-gray-900">1,250</h2>
              <span className="inline-block mt-3 text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">+12% this month</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">Revenue</p>
                <span className="text-2xl">💰</span>
              </div>
              <h2 className="text-4xl font-semibold mt-4 text-gray-900">₹ 45,000</h2>
              <span className="inline-block mt-3 text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">+8% this month</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">Orders</p>
                <span className="text-2xl">🛒</span>
              </div>
              <h2 className="text-4xl font-semibold mt-4 text-gray-900">320</h2>
              <span className="inline-block mt-3 text-xs font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">-2% this week</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-100 font-semibold text-gray-800">Recent Transactions</div>
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                <tr>
                  <th className="px-8 py-4 text-left">User</th>
                  <th className="px-8 py-4 text-left">Amount</th>
                  <th className="px-8 py-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t border-gray-100 hover:bg-gray-50 transition">
                  <td className="px-8 py-5">Ravi Kumar</td>
                  <td className="px-8 py-5">₹ 2,000</td>
                  <td className="px-8 py-5">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">Completed</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-100 hover:bg-gray-50 transition">
                  <td className="px-8 py-5">Priya Sharma</td>
                  <td className="px-8 py-5">₹ 1,500</td>
                  <td className="px-8 py-5">
                    <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
