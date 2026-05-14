import React from 'react';
import { 
  Plus, 
  Filter, 
  SortAsc, 
  Clock, 
  ChevronRight, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Donut,
  Paintbrush,
  Coffee,
  Pencil,
  FileDown
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ClassesView() {
  const activeClasses = [
    { id: 1, name: 'Basic Pottery Wheel', time: 'Saturdays, 10:00 AM', teacher: 'Sarah Lim', capacity: 12, max: 16, fee: 'RM 450.00', icon: Coffee, iconBg: 'bg-primary/10', iconColor: 'text-primary' },
    { id: 2, name: 'Sourdough Mastery', time: 'Sundays, 2:00 PM', teacher: 'Chef Ahmad', capacity: 8, max: 8, fee: 'RM 620.00', icon: Paintbrush, iconBg: 'bg-tertiary/10', iconColor: 'text-tertiary', full: true },
    { id: 3, name: 'Watercolour Botanics', time: 'Wednesdays, 7:00 PM', teacher: 'Nurul Izzah', capacity: 3, max: 10, fee: 'RM 380.00', icon: Pencil, iconBg: 'bg-secondary/10', iconColor: 'text-secondary' },
  ];

  const students = [
    { id: 'HH-2023-014', name: 'Mei Ling Tan', initial: 'ML', streak: '3 PRES.', attendance: [true, true, false, true, true, true] },
    { id: 'HH-2023-089', name: 'Arun Subramaniam', initial: 'AS', streak: 'PERFECT', attendance: [true, true, true, true, true, true] },
    { id: 'HH-2024-002', name: 'Zul Helmi', initial: 'ZH', streak: 'CRITICAL', attendance: [true, false, false, true, true, false], critical: true },
  ];

  return (
    <div className="space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">Classes & Schedule</h2>
          <p className="text-sm text-gray-500 font-medium">12 active classes this semester</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm active:scale-[0.98]">
          <Plus className="w-4 h-4" />
          Create New Class
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Active Classes List */}
        <div className="lg:col-span-8 space-y-8">
          <div className="minimal-card rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
              <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                Active Classes
              </h3>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
                  <Filter className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
                  <SortAsc className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4 space-y-3">
              {activeClasses.map((cls) => (
                <motion.div 
                  whileHover={{ x: 4 }}
                  key={cls.id} 
                  className="group flex items-center p-4 rounded-xl border border-transparent hover:bg-gray-50 hover:border-gray-100 transition-all cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-gray-900 mr-5 shrink-0`}>
                    <cls.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="col-span-1">
                      <h4 className="text-sm font-semibold text-gray-900 mb-0.5 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{cls.name}</h4>
                      <div className="flex items-center text-gray-400 gap-1.5 text-xs font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{cls.time}</span>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight mb-1">Teacher</p>
                      <p className="text-xs font-semibold text-gray-700">{cls.teacher}</p>
                    </div>
                    <div className="col-span-1">
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight mb-1">Enrollment</p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${cls.full ? 'bg-red-500' : 'bg-gray-900'}`} 
                            style={{ width: `${(cls.capacity / cls.max) * 100}%` }}
                          />
                        </div>
                        <span className={`text-[11px] font-bold ${cls.full ? 'text-red-500' : 'text-gray-900'}`}>{cls.capacity}/{cls.max}</span>
                      </div>
                    </div>
                    <div className="col-span-1 md:text-right">
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight mb-1">Monthly Fee</p>
                      <p className="text-xs font-semibold text-gray-900">{cls.fee}</p>
                    </div>
                  </div>
                  <div className="ml-4 text-gray-300 group-hover:text-gray-900 transition-all hidden md:block">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="minimal-card rounded-xl p-8 border-l-4 border-gray-900 bg-white">
            <div className="flex flex-col md:flex-row items-start justify-between mb-8 pb-8 border-b border-gray-50 gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gray-50 text-gray-900 rounded-xl flex items-center justify-center border border-gray-100">
                  <Coffee className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Pottery Genesis (B102)</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold bg-green-50 text-green-700 px-2.5 py-1 rounded-md border border-green-100 uppercase tracking-tight">Active Session</span>
                    <span className="text-[10px] font-medium text-gray-400 uppercase">ID: PRT_992</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="text-right">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight mb-1">Attendance</p>
                  <p className="text-2xl font-bold text-gray-900">94%</p>
                </div>
                <div className="h-10 w-px bg-gray-100 hidden md:block"></div>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-900 font-semibold rounded-lg text-xs hover:bg-gray-50 transition-all">
                  <FileDown className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Students attendance */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Enrolled Students (12)</h4>
                  <button className="text-[11px] font-semibold text-gray-400 hover:text-gray-900">Manage</button>
                </div>
                <div className="space-y-3">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-3.5 border border-transparent rounded-xl hover:bg-gray-50 hover:border-gray-100 transition-all group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 text-xs font-bold border border-gray-100">
                          {student.initial}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-0.5 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{student.name}</p>
                          <p className="text-[10px] text-gray-400 font-medium">{student.id}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex gap-1.5">
                          {student.attendance.map((present, idx) => (
                            <div 
                              key={idx}
                              className={`w-1.5 h-1.5 rounded-full ${
                                present ? 'bg-green-500' : 'bg-red-400'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-tighter ${student.critical ? 'text-red-500' : 'text-gray-400'}`}>
                          {student.streak}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Timeline */}
              <div className="bg-gray-50/50 rounded-xl p-6 border border-gray-50">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-8">Timeline</h4>
                <div className="space-y-10 relative">
                  <div className="absolute left-1 top-1 bottom-1 w-px bg-gray-200"></div>
                  
                  <div className="relative pl-8 group">
                    <div className="absolute left-[-3.5px] top-1.5 w-2 h-2 rounded-full bg-gray-900 z-10"></div>
                    <p className="text-[10px] font-bold text-gray-900 uppercase tracking-tight mb-1">Current Session</p>
                    <p className="text-base font-semibold text-gray-900 mb-2">Surface Fusion Dynamics</p>
                    <div className="flex items-center gap-4 text-[10px] text-gray-500 font-semibold uppercase tracking-tight">
                      <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Studio A-1</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> 10:00 — 12:30</span>
                    </div>
                  </div>
 
                  <div className="relative pl-8 opacity-60">
                    <div className="absolute left-[-3.5px] top-1.5 w-2 h-2 rounded-full bg-gray-300"></div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight mb-1">Next: Session 09</p>
                    <p className="text-base font-semibold text-gray-700">Thermal Processing</p>
                  </div>

                  <div className="mt-10 pt-8 border-t border-gray-200/50">
                    <div className="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight mb-1">Latest Update</p>
                        <p className="text-sm font-semibold text-gray-900">Ceramic Materials Loaded</p>
                      </div>
                      <div className="text-green-600 flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-lg border border-green-100">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar Panel */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* Revenue Snapshot */}
          <div className="minimal-card rounded-xl p-8 border border-gray-100">
            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-10">Revenue Overview</h3>
            <div className="space-y-8">
              <div>
                <p className="text-4xl font-bold text-gray-900 tracking-tight">RM 14,280</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[11px] font-bold text-green-600 px-2 py-0.5 bg-green-50 rounded-md border border-green-100">+12.5%</span>
                  <span className="text-[11px] font-semibold text-gray-400">Monthly Growth</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[11px] font-bold uppercase text-gray-400 tracking-tight">
                    <span>Paid Invoices</span>
                    <span className="text-gray-900">42</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-900 w-[88%] rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[11px] font-bold uppercase text-gray-400 tracking-tight">
                    <span>Overdue</span>
                    <span className="text-red-500">06</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-400 w-[12%] rounded-full"></div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold text-xs hover:bg-gray-800 transition-all shadow-sm active:scale-[0.98]">
                Generate Report
              </button>
            </div>
          </div>

          {/* Occupancy Card */}
          <div className="bg-gray-100 rounded-xl p-8 border border-transparent">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-[11px] font-bold text-gray-900 uppercase tracking-widest">Studio Load</h3>
              <Donut className="w-5 h-5 text-gray-900" />
            </div>
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-gray-200" cx="40" cy="40" fill="transparent" r="35" stroke="currentColor" strokeWidth="5"></circle>
                  <circle className="text-gray-900" cx="40" cy="40" fill="transparent" r="35" stroke="currentColor" strokeDasharray="220" strokeDashoffset="66" strokeWidth="5" strokeLinecap="round" />
                </svg>
                <span className="absolute text-xl font-bold text-gray-900 italic">70%</span>
              </div>
              <div>
                <p className="font-bold text-lg text-gray-900 tracking-tight leading-tight mb-1">Peak Load High</p>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">Utilization is near capacity between 2PM - 6PM.</p>
              </div>
            </div>
            <button className="w-full bg-white text-gray-900 border border-gray-200 mt-8 py-3 rounded-xl text-[11px] font-bold uppercase tracking-wider hover:bg-gray-50 transition-all">
              Manage Resources
            </button>
          </div>

          {/* Activity Logs */}
          <div className="minimal-card rounded-xl p-8">
            <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-10">Activity Logs</h3>
            <div className="space-y-8">
              {[
                { label: 'Li Wei joined Pottery Genesis', time: '2h ago', icon: Plus, color: 'text-gray-900' },
                { label: 'Payment RM 450 from Tan Mei Ling', time: '5h ago', icon: TrendingUp, color: 'text-gray-900' },
                { label: 'Rescheduled Watercolor Basics', time: '1d ago', icon: Clock, color: 'text-gray-900' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer">
                  <div className={`w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 ${item.color} flex items-center justify-center shrink-0 transition-transform`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-700 leading-snug mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{item.label}</p>
                    <p className="text-[10px] text-gray-400 font-medium uppercase">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-3.5 border border-dashed border-gray-200 text-gray-400 font-bold text-[11px] uppercase tracking-wider hover:border-gray-900 hover:text-gray-900 transition-all rounded-xl">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
