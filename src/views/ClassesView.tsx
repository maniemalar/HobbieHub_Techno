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
    <div className="space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 relative">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary"></div>
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">MODULE_EXPLORER</span>
          </div>
          <h2 className="text-4xl font-light text-white tracking-widest uppercase mb-2">Class & Schedule</h2>
          <p className="text-sm text-white/40 font-mono tracking-widest uppercase">ACTIVE_CURRICULUM // 12 MODULES_INITIALIZED</p>
        </div>
        <button className="bg-primary text-on-primary flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:brightness-110 transition-all active:scale-95 group relative z-10 overflow-hidden">
          <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
          INIT_NEW_MODULE
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Active Classes List */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          <div className="immersive-card rounded-2xl overflow-hidden shadow-2xl">
            <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-white/2">
              <h3 className="text-[11px] font-bold text-white flex items-center gap-4 uppercase tracking-[0.4em]">
                <Clock className="w-5 h-5 text-primary" />
                ACTIVE_INSTANCES
              </h3>
              <div className="flex gap-4">
                <button className="w-10 h-10 flex items-center justify-center text-white/40 bg-white/5 border border-white/10 rounded-lg hover:text-primary transition-all">
                  <Filter className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center text-white/40 bg-white/5 border border-white/10 rounded-lg hover:text-primary transition-all">
                  <SortAsc className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {activeClasses.map((cls) => (
                <motion.div 
                  whileHover={{ x: 10 }}
                  key={cls.id} 
                  className="group flex flex-col md:flex-row items-center p-6 border border-white/5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] hover:border-primary/30 transition-all cursor-pointer relative overflow-hidden"
                >
                  <div className={`w-16 h-16 rounded-xl ${cls.iconBg} border border-white/5 flex items-center justify-center ${cls.iconColor} mr-0 md:mr-8 shrink-0 mb-4 md:mb-0 relative overflow-hidden group-hover:scale-110 transition-transform`}>
                    <cls.icon className="w-10 h-10 fill-current opacity-10" />
                    <cls.icon className="w-8 h-8 absolute" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                  </div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 w-full items-center">
                    <div className="col-span-1">
                      <h4 className="text-lg font-light text-white tracking-wide uppercase mb-2 group-hover:text-primary transition-colors">{cls.name}</h4>
                      <div className="flex items-center text-white/40 gap-2 font-mono text-[10px] uppercase tracking-widest">
                        <Clock className="w-3 h-3" />
                        <span>{cls.time}</span>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest mb-2">OPERATOR</p>
                      <p className="text-xs font-bold text-white uppercase tracking-tight">{cls.teacher}</p>
                    </div>
                    <div className="col-span-1">
                       <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest mb-2">LOAD_STATE</p>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-[2px] bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${cls.full ? 'bg-rose-500' : 'bg-primary shadow-[0_0_8px_#22d3ee]'}`} 
                            style={{ width: `${(cls.capacity / cls.max) * 100}%` }}
                          />
                        </div>
                        <span className={`text-[11px] font-mono ${cls.full ? 'text-rose-500' : 'text-primary'}`}>{cls.capacity}/{cls.max}</span>
                      </div>
                    </div>
                    <div className="col-span-1 md:text-right">
                       <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest mb-2">REVENUE_STREAM</p>
                      <p className="text-sm font-mono text-white">{cls.fee}</p>
                    </div>
                  </div>
                  <div className="ml-6 opacity-0 group-hover:opacity-100 transition-all hidden md:block">
                    <ChevronRight className="w-6 h-6 text-primary" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Details View Mock */}
          <div className="immersive-card rounded-2xl p-10 border-l-2 border-primary overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-start justify-between mb-10 pb-8 border-b border-white/5 gap-6 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/5 border border-white/10 text-primary rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden group">
                  <Coffee className="w-10 h-10 group-hover:scale-125 transition-transform" />
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-all" />
                </div>
                <div>
                  <h3 className="text-3xl font-light text-white tracking-widest uppercase mb-2">Pottery Genesis (B102)</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] font-bold bg-primary/10 text-primary px-4 py-1.5 rounded-lg border border-primary/20 uppercase tracking-[0.2em]">MISSION_ACTIVE</span>
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">UID: PRT_992_ALPHA</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8 w-full md:w-auto mt-4 md:mt-0">
                <div className="text-right">
                  <p className="text-[9px] text-white/20 font-bold uppercase tracking-widest mb-2">SYNC_EFFICIENCY</p>
                  <p className="font-mono text-4xl font-light text-emerald-400">94%</p>
                </div>
                <div className="h-12 w-[1px] bg-white/5 hidden md:block"></div>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white/80 font-bold px-8 py-3.5 rounded-xl text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all group">
                  <FileDown className="w-4 h-4 group-hover:scale-125 transition-transform" />
                  EXPORT_DATA
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              {/* Students attendance */}
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">SYNCHRONIZED_USERS (12)</h4>
                  <span className="text-[9px] text-primary font-mono cursor-pointer hover:underline uppercase tracking-tight">EXPAND_ALL</span>
                </div>
                <div className="space-y-6">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-5 bg-white/[0.01] border border-transparent rounded-2xl hover:bg-white/[0.03] hover:border-white/10 transition-all group cursor-pointer">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 font-mono text-xs font-bold uppercase group-hover:text-primary group-hover:border-primary/30 transition-all">
                          {student.initial}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white uppercase tracking-wide group-hover:text-primary transition-colors leading-none mb-2">{student.name}</p>
                          <p className="text-[9px] text-white/20 font-mono uppercase tracking-widest">ID: {student.id}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-3">
                        <div className="flex gap-2">
                          {student.attendance.map((present, idx) => (
                            <div 
                              key={idx}
                              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                                present 
                                  ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' 
                                  : 'bg-rose-500 shadow-[0_0_8px_#f43f5e]'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className={`text-[9px] font-mono uppercase tracking-widest ${student.critical ? 'text-rose-500' : 'text-white/10 group-hover:text-emerald-400 transition-colors'}`}>
                          {student.streak}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Schedule */}
              <div className="bg-white/[0.02] rounded-2xl p-8 flex flex-col border border-white/5 relative overflow-hidden group">
                <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] mb-10">EVENT_TIMELINE</h4>
                <div className="flex-1 space-y-12 relative ml-3">
                  <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-white/5"></div>
                  
                  <div className="relative pl-12 group/item">
                    <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-primary z-10 shadow-[0_0_10px_#22d3ee] animate-pulse"></div>
                    <p className="text-[9px] font-mono text-primary uppercase tracking-[0.3em] mb-2">SESSION_08 // ACTIVE</p>
                    <p className="text-lg font-light text-white uppercase tracking-wide group-hover/item:text-primary transition-colors mb-3">Surface Fusion Dynamics</p>
                    <div className="flex items-center gap-6 text-[9px] text-white/30 font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-2 border border-white/5 px-2 py-1 rounded bg-white/[0.02]"><MapPin className="w-3 h-3 text-primary" /> Sector A-1</span>
                      <span className="flex items-center gap-2 border border-white/5 px-2 py-1 rounded bg-white/[0.02]"><Clock className="w-3 h-3 text-primary" /> 10:00 — 12:30</span>
                    </div>
                  </div>
 
                  <div className="relative pl-12 opacity-40 group/item hover:opacity-100 transition-opacity">
                    <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-white/10 shadow-sm border border-white/20"></div>
                    <p className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em] mb-2">SESSION_09 // PENDING</p>
                    <p className="text-lg font-light text-white uppercase tracking-wide">Thermal Processing Alpha</p>
                  </div>

                  <div className="relative pl-12 opacity-20">
                    <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-white/5 shadow-sm border border-white/10"></div>
                    <p className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em] mb-2">SESSION_10 // PENDING</p>
                    <p className="text-lg font-light text-white uppercase tracking-wide">Glaze Infusion 101</p>
                  </div>

                  <div className="mt-12 pt-10 border-t border-white/5">
                    <div className="bg-white/2 p-6 rounded-2xl border border-white/5 flex items-center justify-between group-hover:bg-white/5 transition-all">
                      <div>
                        <p className="text-[9px] text-white/20 font-bold uppercase tracking-widest mb-2">RESOURCE_DEPOT</p>
                        <p className="text-sm font-bold text-white uppercase tracking-wide">Ceramic Fusion Core</p>
                      </div>
                      <div className="text-emerald-400 flex items-center gap-3 bg-emerald-400/5 px-4 py-2 rounded-xl border border-emerald-400/20">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest">LOADED</span>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-[0.02] text-primary">
                  <TrendingUp className="w-40 h-40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar Panel */}
        <div className="lg:col-span-4 flex flex-col gap-10">
          {/* Financial Snapshot */}
          <div className="immersive-card rounded-2xl p-8 shadow-2xl relative overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">
            <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] mb-10">FISCAL_ANALYTICS</h3>
            <div className="space-y-10 relative z-10">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Total Output (Month)</span>
                  <span className="text-[10px] text-emerald-400 font-mono border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 rounded-lg">+12.5% SYNC</span>
                </div>
                <p className="text-5xl font-light text-white tracking-tighter uppercase">RM 14,280</p>
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">COMPLETED_CHANNELS</span>
                    <span className="font-mono text-emerald-400">42</span>
                  </div>
                  <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[88%] shadow-[0_0_8px_#34d399]"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">PENDING_LATENCY</span>
                    <span className="font-mono text-rose-500">06</span>
                  </div>
                  <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 w-[12%] shadow-[0_0_8px_#f43f5e]"></div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-primary/5 border border-primary/20 text-primary py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-primary/10 transition-all shadow-sm active:scale-95">
                GENERATE_LEDGER_REPORT
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] pointer-events-none" />
          </div>

          {/* Occupancy Card */}
          <div className="bg-primary text-on-primary rounded-2xl p-8 relative overflow-hidden group shadow-[0_0_40px_rgba(34,211,238,0.2)]">
            <div className="relative z-10 flex flex-col h-full justify-between gap-10">
              <div className="flex justify-between items-center">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-80">STUDIO_UTILITIES</h3>
                <Donut className="w-6 h-6 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
              </div>
              <div className="flex items-center gap-8">
                <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-white/10" cx="48" cy="48" fill="transparent" r="42" stroke="currentColor" strokeWidth="6"></circle>
                    <circle className="text-white" cx="48" cy="48" fill="transparent" r="42" stroke="currentColor" strokeDasharray="264" strokeDashoffset="79" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                  <span className="absolute text-2xl font-light font-mono">70%</span>
                </div>
                <div>
                  <p className="font-light text-2xl uppercase tracking-tighter leading-tight mb-2">Core Load High</p>
                  <p className="text-[10px] opacity-70 font-bold uppercase tracking-wider leading-relaxed">System nearing peak capacity between 14:00 - 18:00.</p>
                </div>
              </div>
              <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md py-3 rounded-xl text-[9px] font-bold uppercase tracking-widest transition-all">OPTIMIZE_RESOURCES</button>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
               <TrendingUp className="w-48 h-48" />
            </div>
          </div>

          {/* Activity Feed */}
          <div className="immersive-card rounded-2xl p-8 shadow-2xl">
            <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] mb-10">SIGNAL_LOGS</h3>
            <div className="space-y-8">
              {[
                { label: 'NEW_ENTITY: LI WEI JOINED SECTOR_7', time: '2H_AGO', icon: Plus, color: 'bg-emerald-400 shadow-[0_0_15px_#34d399]' },
                { label: 'TRANSFER_COMPLETE: RM 450 FROM ML_TAN', time: '5H_AGO', icon: TrendingUp, color: 'bg-primary shadow-[0_0_15px_#22d3ee]' },
                { label: 'RESCHEDULE_EVENT: B101 -> OCT_25', time: '1D_AGO', icon: Clock, color: 'bg-rose-500 shadow-[0_0_15px_#f43f5e]' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group cursor-pointer">
                  <div className={`w-10 h-10 rounded-lg ${item.color} text-on-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform relative overflow-hidden`}>
                    <item.icon className="w-5 h-5" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <p className="text-sm font-light text-white group-hover:text-primary transition-colors leading-snug mb-1 uppercase tracking-tight">{item.label}</p>
                    <p className="text-[9px] text-white/20 font-mono font-bold uppercase tracking-widest">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 border border-dashed border-white/5 text-white/20 font-mono text-[9px] uppercase tracking-widest hover:border-primary/50 hover:text-primary transition-all rounded-xl">LOAD_MORE_SIGNALS</button>
          </div>
        </div>
      </div>
    </div>
  );
}
