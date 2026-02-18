import React from 'react';
import { Search, Bell } from 'lucide-react'; // Icons ko import karna zaroori hai

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-slate-50">
            {/* Left Side: Title and Subtitle */}
            <div>
                <h2 className="text-3xl font-extrabold text-[#1E293B] tracking-tight">
                    Management Overview
                </h2>
                <p className="text-sm font-semibold text-slate-500">
                    Academic Year 2025-26 | <span className="text-[#10B981]">Active</span>
                </p>
            </div>

            {/* Right Side: Search and Notifications */}
            <div className="flex items-center gap-4">
                {/* Search Bar */}
                <div className="bg-white px-6 py-3 rounded-xl shadow-sm border-2 border-slate-100 flex items-center gap-3 w-80 focus-within:border-[#10B981] transition-all">
                    <Search size={18} className="text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search records..."
                        className="bg-transparent border-none outline-none text-sm w-full font-bold"
                    />
                </div>

                {/* Bell/Notification Icon */}
                <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center text-slate-400 border-2 border-slate-100 shadow-sm relative cursor-pointer hover:border-[#10B981] hover:text-[#10B981] transition-all">
                    <Bell size={22} />
                    {/* Notification Badge */}
                    <span className="absolute top-2 right-2 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
                </div>
            </div>
        </header>
    );
}