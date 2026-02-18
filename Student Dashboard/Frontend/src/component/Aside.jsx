import React, { useState } from 'react';
import { 
  GraduationCap, 
  LayoutDashboard, 
  Users, 
  UserRoundCheck, // Teacher icon ke liye
  PieChart, 
  Calendar, 
  Mail,
  ChevronDown,
  UserPlus,
  Eye,
  PlusCircle
} from 'lucide-react';

// Reusable Nav Link Component
const SidebarLink = ({ icon, label, active = false, onClick, hasSubmenu = false, isOpen = false }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
      active 
        ? 'bg-[#10B981] text-white shadow-lg shadow-[#10B981]/20' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`}
  >
    <div className="flex items-center gap-3">
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </div>
    {hasSubmenu && (
      <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
    )}
  </button>
);

export default function Aside() {
  
  // Dono menus ke liye alag state
  const [isStudentOpen, setIsStudentOpen] = useState(false);
  const [isTeacherOpen, setIsTeacherOpen] = useState(false);

  return (
    <aside className="w-64 bg-[#1E293B] rounded-[24px] shadow-2xl flex flex-col py-8 px-4 h-screen">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-10 px-4">
        <div className="h-10 w-10 bg-[#10B981] rounded-xl flex items-center justify-center text-white shadow-lg">
          <GraduationCap size={24} />
        </div>
        <span className="text-xl font-bold tracking-tight text-white uppercase">
          Edu<span className="text-[#10B981]">Prime</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
        <SidebarLink   icon={<LayoutDashboard size={20} />} label="Dashboard" />
        
        {/* Teachers Dropdown */}
        <div className="mt-1">
          <SidebarLink 
            icon={<UserRoundCheck size={20} />} 
            label="Teachers" 
            hasSubmenu={true}
            isOpen={isTeacherOpen}
            onClick={() => setIsTeacherOpen(!isTeacherOpen)}
          />
          {isTeacherOpen && (
            <div className="ml-9 mt-2 space-y-1">
              <a href="/addteacher" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-[#10B981] transition-colors">
                <PlusCircle size={16} />
                Add Teacher
              </a>
              <a href="/viewteacher" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-[#10B981] transition-colors">
                <Eye size={16} />
                View Teachers
              </a>
            </div>
          )}
        </div>
        {/* Students Dropdown */}
        <div>
          <SidebarLink 
            icon={<Users size={20} />} 
            label="Students" 
            hasSubmenu={true}
            isOpen={isStudentOpen}
            onClick={() => setIsStudentOpen(!isStudentOpen)}
          />
          {isStudentOpen && (
            <div className="ml-9 mt-2 space-y-1">
              <a href="/addstudent" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-[#10B981] transition-colors">
                <UserPlus size={16} />
                Add Student
              </a>
              <a href="/viewstudent" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-[#10B981] transition-colors">
                <Eye size={16} />
                View Students
              </a>
            </div>
          )}
        </div>


        <SidebarLink icon={<PieChart size={20} />} label="Performance" />
        <SidebarLink icon={<Calendar size={20} />} label="Attendance" />
        <SidebarLink icon={<Mail size={20} />} label="Notices" />
      </nav>

      {/* Bottom Status Card */}
      <div className="mt-auto px-4">
        <div className="p-4 bg-slate-700/50 rounded-2xl border border-slate-600">
          <p className="text-[10px] font-bold text-[#10B981] uppercase">System Status</p>
          <p className="text-xs text-white mt-1">All Nodes Online</p>
        </div>
      </div>
    </aside>
  );
}