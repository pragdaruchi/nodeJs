import { Home, Map } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Aside() {
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-white shadow-sm flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-purple-600 flex items-center gap-2">
          <span className="text-3xl">🟣</span> Purple
        </h1>
      </div>

      {/* User Profile */}
      <div className="px-6 py-4 flex items-center gap-3">
        <div className="relative">
          <img
            src="https://i.pravatar.cc/100?u=david"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
        </div>
        <div>
          <p className="text-sm font-bold">David Grey. H</p>
          <p className="text-xs text-gray-400">Project Manager</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4 flex-1 px-4 space-y-1">
        {/* Dashboard */}
        <div className="flex items-center gap-4 py-3 px-2 rounded-md text-purple-600 font-bold cursor-pointer">
          <Home size={18} /> <span className="text-sm flex-1">Dashboard</span>
        </div>

        {/* Form Menu */}
        <ul className="space-y-1">
          <li>
            {/* Hidden checkbox for click-to-toggle */}
            <input type="checkbox" id="form-toggle" className="hidden peer" />
            <label
              htmlFor="form-toggle"
              className="flex items-center gap-4 py-3 px-2 text-gray-500 cursor-pointer transition-all peer-checked:text-purple-600"
            >
              <Map size={18} />
              <span className="text-sm flex-1">Form</span>
              <span className="text-[10px] opacity-40 transition-transform peer-checked:rotate-180 inline-block">
                ▼
              </span>
            </label>

            {/* Submenu */}
            <ul className="pl-8 max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-40">
              <li onClick={() => navigate("/addAdmin")} className="py-1 text-sm text-gray-400 hover:text-purple-500 cursor-pointer">Add Admin</li>
              <li onClick={() => navigate("/viewAdmin")} className="py-1 text-sm text-gray-400 hover:text-purple-500 cursor-pointer">View Admin</li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
