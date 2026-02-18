import React from 'react';
import { 
  LayoutDashboard, Users, GraduationCap, 
  Settings, Bell, Search, Plus, 
  ChevronRight, MoreHorizontal, Calendar,
  PieChart, ShieldCheck, Mail, ArrowUpRight,
  UserPlus, Hash, CheckCircle2, AlertCircle
} from 'lucide-react';
import Header from './Header';
import Aside from './Aside';

export default function HighContrastUI() {
  return (
    <div className="flex h-screen bg-[#F1F3F6] text-[#2D3436] font-sans p-6 gap-6 overflow-hidden">
      
      {/* 1. SOLID SIDEBAR */}
    <Aside/>
      {/* 2. MAIN HUB */}
      <main className="flex-1 flex flex-col gap-6">
        
        {/* HEADER - Solid & Clear */}
       <Header/>

        {/* 3. VIBRANT CARDS */}
        <div className="grid grid-cols-4 gap-6">
          <SolidStatCard label="Total Students" value="4,850" icon={<Users />} color="border-[#10B981]" textColor="text-[#10B981]" />
          <SolidStatCard label="Attendance" value="92.4%" icon={<CheckCircle2 />} color="border-[#F59E0B]" textColor="text-[#F59E0B]" />
          <SolidStatCard label="Pending Fees" value="128" icon={<AlertCircle />} color="border-[#EF4444]" textColor="text-[#EF4444]" />
          <SolidStatCard label="Live Classes" value="14" icon={<PieChart />} color="border-[#6366F1]" textColor="text-[#6366F1]" />
        </div>

        {/* 4. CONTENT TABLE (Solid Look) */}
        <div className="flex-1 bg-white rounded-[24px] shadow-lg border-2 border-slate-100 overflow-hidden flex flex-col">
          <div className="p-8 flex items-center justify-between bg-slate-50/50 border-b-2 border-slate-100">
            <h3 className="text-xl font-extrabold text-[#1E293B]">Recent Enrollments</h3>
            <button className="bg-[#10B981] text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg shadow-emerald-200 hover:bg-[#059669] transition-all flex items-center gap-2">
              <Plus size={20} /> New Admission
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                  <th className="px-10 py-5">Full Name</th>
                  <th className="px-10 py-5">Roll Number</th>
                  <th className="px-10 py-5">Department</th>
                  <th className="px-10 py-5">Status</th>
                  <th className="px-10 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <SolidRow name="Cody Fisher" id="2025001" dept="B.Tech CS" status="Verified" statusColor="bg-emerald-100 text-emerald-700" />
                <SolidRow name="Savannah Nguyen" id="2025084" dept="B.Com" status="Pending" statusColor="bg-amber-100 text-amber-700" />
                <SolidRow name="Jerome Bell" id="2025112" dept="Architecture" status="Flagged" statusColor="bg-rose-100 text-rose-700" />
                <SolidRow name="Arlene McCoy" id="2025045" dept="B.Sc Physics" status="Verified" statusColor="bg-emerald-100 text-emerald-700" />
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- COMPONENTS ---

function SidebarLink({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-4 px-6 py-4 rounded-xl cursor-pointer transition-all ${active ? 'bg-[#10B981] text-white shadow-lg shadow-emerald-900/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
      {icon}
      <span className="text-[15px] font-bold tracking-wide">{label}</span>
    </div>
  );
}

function SolidStatCard({ label, value, icon, color, textColor }) {
  return (
    <div className={`bg-white p-6 rounded-2xl border-l-8 ${color} shadow-sm hover:shadow-md transition-all`}>
      <div className={`flex items-center justify-between mb-4 ${textColor}`}>
        <div className="bg-slate-50 p-2 rounded-lg">{icon}</div>
        <ArrowUpRight size={18} />
      </div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
      <h4 className="text-3xl font-extrabold text-[#1E293B] mt-1">{value}</h4>
    </div>
  );
}

function SolidRow({ name, id, dept, status, statusColor }) {
  return (
    <tr className="hover:bg-slate-50/80 transition-all cursor-pointer">
      <td className="px-10 py-6">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 bg-[#1E293B] rounded-lg flex items-center justify-center text-white font-bold text-sm">
            {name.charAt(0)}
          </div>
          <span className="text-sm font-bold text-[#1E293B]">{name}</span>
        </div>
      </td>
      <td className="px-10 py-6 text-sm font-bold text-slate-500 tracking-tight">#{id}</td>
      <td className="px-10 py-6 text-xs font-black text-slate-600 uppercase tracking-tighter">{dept}</td>
      <td className="px-10 py-6">
        <span className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest ${statusColor}`}>
          {status}
        </span>
      </td>
      <td className="px-10 py-6 text-right">
        <button className="h-9 w-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 hover:bg-[#1E293B] hover:text-white transition-all ml-auto">
          <MoreHorizontal size={18} />
        </button>
      </td>
    </tr>
  );
}