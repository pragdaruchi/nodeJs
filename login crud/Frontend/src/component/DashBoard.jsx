import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Box, Layers, BarChart2 } from 'lucide-react';
import Header from './Header';
import Aside from './aside';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#f2edf3] font-sans text-gray-700">

      {/* --- SIDEBAR --- */}
      
      <Aside/>
      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Header />

        {/* Dashboard Body */}
        <div className="p-8">

          {/* Breadcrumb Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-purple-600 rounded text-white shadow-lg shadow-purple-200">
                <Home size={16} />
              </div>
              <h2 className="text-xl font-semibold">Dashboard</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              Overview <span className="text-purple-500 border border-purple-500 rounded-full w-4 h-4 flex items-center justify-center text-[10px]">i</span>
            </div>
          </div>

          {/* 3 Main Gradient Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-r from-[#ffbf96] to-[#fe7096] p-8 rounded-md text-white shadow-lg relative overflow-hidden">
              <BarChart2 className="absolute right-4 top-8 opacity-20" size={48} />
              <h4 className="text-lg font-normal opacity-90">Weekly Sales</h4>
              <p className="text-3xl font-bold mt-2 mb-4">$ 15,0000</p>
              <p className="text-sm">Increased by 60%</p>
            </div>
            {/* Card 2 */}
            <div className="bg-gradient-to-r from-[#90caf9] to-[#047edf] p-8 rounded-md text-white shadow-lg relative overflow-hidden">
              <Box className="absolute right-4 top-8 opacity-20" size={48} />
              <h4 className="text-lg font-normal opacity-90">Weekly Orders</h4>
              <p className="text-3xl font-bold mt-2 mb-4">45,6334</p>
              <p className="text-sm">Decreased by 10%</p>
            </div>
            {/* Card 3 */}
            <div className="bg-gradient-to-r from-[#84d9d2] to-[#07cdae] p-8 rounded-md text-white shadow-lg relative overflow-hidden">
              <Layers className="absolute right-4 top-8 opacity-20" size={48} />
              <h4 className="text-lg font-normal opacity-90">Visitors Online</h4>
              <p className="text-3xl font-bold mt-2 mb-4">95,5741</p>
              <p className="text-sm">Increased by 5%</p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Left Chart Card */}
            <div className="lg:col-span-2 bg-white p-8 rounded-md shadow-sm">
              <div className="flex justify-between items-center mb-10">
                <h3 className="font-bold text-gray-700">Visit And Sales Statistics</h3>
                <div className="flex gap-4 text-xs font-medium">
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-purple-400"></span> CHN</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#fe7096]"></span> USA</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#047edf]"></span> UK</span>
                </div>
              </div>

              {/* Manual Bar Representation (Pure CSS) */}
              <div className="h-64 flex items-end justify-between px-2 border-b border-gray-100">
                {[50, 80, 40, 60, 45, 75, 55, 65].map((h, i) => (
                  <div key={i} className="flex gap-1 items-end h-full w-full max-w-[40px]">
                    <div style={{ height: `${h}%` }} className="w-1.5 bg-purple-400 rounded-t-sm"></div>
                    <div style={{ height: `${h - 20}%` }} className="w-1.5 bg-[#fe7096] rounded-t-sm"></div>
                    <div style={{ height: `${h - 10}%` }} className="w-1.5 bg-[#047edf] rounded-t-sm"></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
              </div>
            </div>

            {/* Right Donut Card */}
            <div className="bg-white p-8 rounded-md shadow-sm">
              <h3 className="font-bold text-gray-700 mb-8">Traffic Sources</h3>

              {/* Donut Circle UI */}
              <div className="flex justify-center mb-10">
                <div className="w-44 h-44 rounded-full border-[20px] border-t-[#fe7096] border-r-[#047edf] border-b-[#84d9d2] border-l-[#84d9d2]"></div>
              </div>

              {/* Legends */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#047edf]"></div>
                    <span className="text-gray-500 font-medium">Search Engines</span>
                  </div>
                  <span className="text-gray-400">30%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#84d9d2]"></div>
                    <span className="text-gray-500 font-medium">Direct Click</span>
                  </div>
                  <span className="text-gray-400">30%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#fe7096]"></div>
                    <span className="text-gray-500 font-medium">Bookmarks Click</span>
                  </div>
                  <span className="text-gray-400">40%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
