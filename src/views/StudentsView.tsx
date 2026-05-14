import React from 'react';
import { 
  Plus, 
  Filter, 
  Search, 
  UserPlus, 
  Phone, 
  Mail, 
  MessageCircle, 
  TrendingUp, 
  History, 
  FileText,
  ChevronDown,
  Edit2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function StudentsView() {
  const students = [
    { name: 'Zara Ahmad', class: 'Advanced Pottery', phone: '+60 12-345 6789', attendance: '92%', status: 'PAID', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxu6P7cra7EPLCvIxP0ayTXYqAVjLKokQ6HCmJDU3tTKTf66YigIC0eWHa28CWBuJ7wIgWO-_Ao1eH_pqhRAs3gWF89_1I4FE1VHAklDcVNMTxvJ67DEfheRV2Yyn1wIwL8j_UYjD7TrLefhgDPE8H2dOt41A2aarlGp388EQ9TrL6fx2GLJOVtmz9zw-am41gGBDlwcVdzGvN_Mf6kCVX49_XPjy0Ezdi0I8UQEgBnjSzhJvUnB228Ztfo0tAs35pwvQPK9AFeDF4' },
    { name: 'Lim Wei Han', class: 'Intro to Watercolor', phone: '+60 17-987 6543', attendance: '78%', status: 'OVERDUE', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASU_bCD6gK2Wi_i7PKO0UKF5lhH1PJb9FQGODfVS3QyVLAlv5HbrA-cMpCK_WaJ0VQ-Ki4UaWd8_d4gGcGGk4Q0AuX3fYs8kF_LX2B_OVdVOtFa-M1nOcek8-IPUb35CIcspdQ221k5SdZ4w2nNVVK0NtNj3_AbYagtYGiQlb5RfwGpJgPAUX32q4vZDSXBE-Sm4ygFyBV5IuXDBGMjxdY_-CgVEVFCMpTKHFdtiv2abBylfpV3uY1V-lLWQP0h0bNAXNylsxwyNs1' },
    { name: 'Dinesh Kumar', class: 'Woodworking Basics', phone: '+60 11-234 5678', attendance: '85%', status: 'PARTIAL', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp0UgJP70_rlcDay7RVMJRbgX0-KWuLK7U9G_A15a5a_-Dfi2igHGt6A_h4kNkqlaThNkZmodrlQPLdvDyhq32IWIV0TZK8XB9tayTLyuphWV5J6ukZHbhW5zLd7mbKTzJOKL6iTNzVLyaNFChOzYBrdAIuswRQzK-4dlvJMOpnmCHTkFBcYvygHCJoPh9FcQ4QyO1tj9nYe51fPXsXox2VI8GyukkuQgqxAy3q2jVV5abJyvpaS-b2c1hcVdCZgEypBVfM5y_iPAh' },
  ];

  return (
    <div className="space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">Student Directory</h2>
          <p className="text-sm text-gray-500 font-medium">24 active students enrolled</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all active:scale-[0.98]">
            <Filter className="w-4 h-4 text-gray-400" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm active:scale-[0.98]">
            <UserPlus className="w-4 h-4" />
            Register Student
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar: Student List */}
        <div className="lg:col-span-4 space-y-6">
          <div className="minimal-card rounded-xl p-6 shadow-sm overflow-hidden bg-white">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-tight">Active Students</span>
              <button className="text-gray-400 hover:text-gray-900">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {students.map((student, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={student.name} 
                  className={`group p-4 rounded-xl border transition-all cursor-pointer relative ${
                    student.name === 'Zara Ahmad' 
                      ? 'bg-gray-50 border-gray-100 shadow-sm' 
                      : 'bg-transparent border-transparent hover:bg-gray-50/50 hover:border-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img className="w-12 h-12 rounded-lg object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all border border-gray-100" src={student.avatar} alt={student.name} />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1 gap-2">
                        <h3 className="text-sm font-bold text-gray-900 truncate uppercase tracking-tight group-hover:text-blue-600 transition-colors">{student.name}</h3>
                        <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border border-transparent ${
                          student.status === 'PAID' ? 'bg-green-50 text-green-700' : 
                          student.status === 'OVERDUE' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700'
                        }`}>
                          {student.status}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight truncate">{student.class}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[10px] font-semibold">
                    <span className="flex items-center gap-1.5 text-gray-400 group-hover:text-gray-600 transition-colors">
                      <Phone className="w-3 h-3" /> 
                      {student.phone}
                    </span>
                    <span className={`text-gray-400 font-bold uppercase tracking-tighter ${student.name === 'Zara Ahmad' ? 'text-gray-900' : ''}`}>
                      {student.attendance} Attendance
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 border border-dashed border-gray-200 text-gray-400 font-bold text-[11px] uppercase tracking-wider hover:border-gray-900 hover:text-gray-900 transition-all rounded-xl">
              Load More
            </button>
          </div>
        </div>

        {/* Right Content: Student Details */}
        <div className="lg:col-span-8 space-y-8">
          {/* Profile Header */}
          <div className="minimal-card rounded-xl p-8 border-l-4 border-gray-900 bg-white">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative group shrink-0">
                <img 
                  className="w-36 h-36 rounded-xl object-cover border border-gray-100 grayscale hover:grayscale-0 transition-all duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWh2EOdXpNuTNWqmFaX69Vp8610ryAkDTQmrNCTdLbPNGB9Ccfo1FnbP1YR-9LbshA8-Dg9UqtqPnXvEI5yssiEAJ5RtLFiB2vK0skqnzMdi1vmYfSiNJ4iPDs1s01g2DgjRGDc4eekOfT9h6sHQNCp5oY4bxXmQ1c3dDcWwYlrBKeQbFfCrrEMWS2Eh6fKlUw0POBRD6uZ9isdhtFdPDvN89cXlm90JII0iTagVkRIjE9ehRNLSyJ7fAbXceFEdB7WxrNhb2mRvGI" 
                  alt="Zara" 
                />
                <button className="absolute -bottom-2 -right-2 bg-gray-900 text-white p-2.5 rounded-lg shadow-md hover:scale-110 active:scale-95 transition-all">
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Zara Ahmad</h3>
                  <span className="bg-green-50 text-green-700 text-[10px] font-bold px-3 py-1.5 rounded-md border border-green-100 uppercase tracking-tight">Prime Status: Paid</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-gray-400 tracking-tight mb-1.5">Program</p>
                    <p className="text-gray-900 font-bold text-sm uppercase tracking-tight">Advanced Pottery</p>
                    <p className="text-[10px] font-semibold text-gray-400 mt-0.5">Tue 15:00</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-gray-400 tracking-tight mb-1.5">Parent</p>
                    <p className="text-gray-900 font-bold text-sm uppercase tracking-tight">Mrs. Farah Ahmad</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-gray-400 tracking-tight mb-1.5">Enrolled</p>
                    <p className="text-gray-900 font-bold text-sm uppercase tracking-tight">January 2023</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gray-50 border border-gray-100 text-gray-900 rounded-lg text-[11px] font-bold uppercase tracking-wider hover:bg-gray-100 transition-all group active:scale-[0.98]">
                    <MessageCircle className="w-3.5 h-3.5 text-green-600" />
                    WhatsApp
                  </button>
                  <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-gray-200 text-gray-500 rounded-lg text-[11px] font-bold uppercase tracking-wider hover:text-gray-900 hover:border-gray-300 transition-all active:scale-[0.98]">
                    <Mail className="w-3.5 h-3.5" />
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Progress Timeline */}
            <div className="minimal-card rounded-xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-50">
                <h4 className="text-[11px] font-bold text-gray-400 flex items-center gap-2 uppercase tracking-widest">
                  <FileText className="w-4 h-4" />
                  Progress Notes
                </h4>
                <button className="text-[10px] font-bold text-gray-900 hover:underline px-2 py-1 rounded-md transition-all">New Entry</button>
              </div>
              <div className="space-y-10 relative">
                <div className="absolute left-1.5 top-1 bottom-4 w-px bg-gray-100"></div>
                
                <div className="relative pl-8 group">
                  <div className="absolute left-[-2.5px] top-1.5 w-2 h-2 bg-gray-900 rounded-full z-10 transition-transform group-hover:scale-125"></div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight mb-1">24 Oct 2023</p>
                  <h5 className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-2">Centering Mastered</h5>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">Zara has shown great improvement in centering larger clay masses (up to 2kg). Ready for taller cylinder forms.</p>
                </div>
                
                <div className="relative pl-8 opacity-60 hover:opacity-100 transition-opacity group">
                  <div className="absolute left-[-2.5px] top-1.5 w-2 h-2 bg-gray-200 rounded-full group-hover:bg-gray-400 z-10"></div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight mb-1">10 Oct 2023</p>
                  <h5 className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-2">Experimental Glazing</h5>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">Focused on layering matte glazes. Encouraged her to keep a glazing diary.</p>
                </div>
              </div>
            </div>

            {/* Attendance & Payments Column */}
            <div className="space-y-8">
              {/* Attendance Status */}
              <div className="minimal-card rounded-xl p-8 border border-gray-100 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-[11px] font-bold text-gray-400 flex items-center gap-2 uppercase tracking-widest">
                    <TrendingUp className="w-4 h-4" />
                    Attendance
                  </h4>
                  <span className="text-gray-900 font-bold text-2xl tracking-tighter">92%</span>
                </div>
                <div className="flex items-end justify-between h-20 gap-3 px-1 relative">
                  {[90, 85, 95, 92, 20].map((h, i) => (
                    <div 
                      key={i} 
                      className={`w-full rounded-md transition-all duration-700 relative group overflow-hidden ${i === 4 ? 'bg-gray-100' : 'bg-gray-900'}`} 
                      style={{ height: `${h}%` }}
                    >
                      {i === 3 && (
                        <div className="absolute inset-x-0 bottom-0 bg-white/20 h-1/2" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-[9px] font-bold text-gray-400 uppercase tracking-tight">
                  <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span>
                </div>
              </div>

              {/* Payment History */}
              <div className="minimal-card rounded-xl p-8 border border-gray-100">
                <h4 className="text-[11px] font-bold text-gray-400 mb-6 flex items-center gap-2 uppercase tracking-widest border-b border-gray-50 pb-4">
                  <History className="w-4 h-4" />
                  Payment History
                </h4>
                <div className="space-y-6">
                  {[
                    { title: 'October Fees', id: '10294', date: '01.10.2023', amount: 'RM 250' },
                    { title: 'Materials', id: '10156', date: '15.09.2023', amount: 'RM 85' }
                  ].map((p, idx) => (
                    <div key={idx} className="flex justify-between items-center group cursor-pointer border-b border-gray-50 pb-4 last:border-0 last:pb-0 hover:bg-gray-50/50 p-1 px-2 rounded-lg transition-all">
                      <div>
                        <p className="text-xs font-bold text-gray-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors mb-1">{p.title}</p>
                        <p className="text-[10px] text-gray-400 font-medium tracking-tight">INV #{p.id} • {p.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">{p.amount}</p>
                        <p className="text-green-600 font-bold uppercase text-[9px] tracking-tight mt-1">Paid</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-3.5 text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50 border border-gray-100 rounded-xl hover:bg-gray-100 hover:text-gray-900 transition-all active:scale-[0.98]">
                  Full History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
