import { Bell, LayoutGrid, Mail, Search } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
    return (
        <div>
            <header className="h-16 bg-white flex items-center justify-between px-8 shadow-sm">
                <div className="flex items-center gap-6">
                    <LayoutGrid size={20} className="text-gray-400 cursor-pointer" />
                    <div className="relative">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Search projects" className="pl-10 pr-4 py-2 text-sm bg-transparent outline-none focus:ring-0" />
                    </div>
                </div>

                <div className="flex items-center gap-6 text-gray-500">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img src="https://i.pravatar.cc/100?u=david" alt="user" className="w-8 h-8 rounded-full" />
                        <span className="text-sm font-medium">David Greymaax</span>
                    </div>
                    <Mail size={18} className="cursor-pointer" />
                    <div className="relative cursor-pointer">
                        <Bell size={18} />
                        <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full border-2 border-white"></span>
                    </div>
                    <button className="cursor-pointer hover:text-[#83ac98] text-lg font-medium" onClick={() => navigate("/")}>LogOut</button>
                </div>
            </header>
        </div>
    )
}
