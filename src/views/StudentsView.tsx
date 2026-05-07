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
    <div className="space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 relative">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary"></div>
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">COMMUNITY_DATABASE</span>
          </div>
          <h2 className="text-4xl font-light text-white tracking-widest uppercase mb-2">Student Directory</h2>
          <p className="text-sm text-white/40 font-mono tracking-widest uppercase">USER_PROFILES // 24_ENTITIES_SYNCED</p>
        </div>
        <div className="flex gap-4 relative z-10">
          <button className="flex items-center gap-3 bg-white/5 border border-white/10 text-white/80 px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 hover:border-primary/50 transition-all active:scale-95 group">
            <Filter className="w-4 h-4 text-primary group-hover:scale-125 transition-transform" />
            FILTER_LOGS
          </button>
          <button className="flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            <UserPlus className="w-4 h-4" />
            REGISTER_USER
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Sidebar: Student List */}
        <div className="lg:col-span-4 space-y-8">
          <div className="immersive-card rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-8 opacity-60">
              <span className="text-[10px] font-bold uppercase text-white tracking-[0.3em]">24_USER_SIGNALS</span>
              <button className="text-primary">
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-6">
              {students.map((student, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={student.name} 
                  className={`group p-6 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                    student.name === 'Zara Ahmad' 
                      ? 'bg-primary/10 border-primary/30 shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]' 
                      : 'bg-white/[0.01] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-5 relative z-10">
                    <img className="w-14 h-14 rounded-lg object-cover border border-white/10 group-hover:border-primary/50 transition-all" src={student.avatar} alt={student.name} />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-sm font-light text-white tracking-wide uppercase group-hover:text-primary transition-colors leading-none">{student.name}</h3>
                        <span className={`text-[8px] font-mono uppercase px-2 py-1 rounded border ${
                          student.status === 'PAID' ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' : 
                          student.status === 'OVERDUE' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' : 'bg-amber-400/10 text-amber-400 border-amber-400/20'
                        }`}>
                          {student.status}
                        </span>
                      </div>
                      <p className="text-[9px] text-white/30 font-mono uppercase tracking-widest">{student.class}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-[9px] font-mono font-bold text-white/20 relative z-10">
                    <span className="flex items-center gap-2 group-hover:text-white/40 transition-colors uppercase tracking-widest">
                      <Phone className="w-3 h-3 text-primary opacity-40 group-hover:opacity-100 transition-opacity" /> 
                      {student.phone}
                    </span>
                    <span className={`transition-colors uppercase tracking-widest ${student.name === 'Zara Ahmad' ? 'text-primary' : ''}`}>
                      {student.attendance}_LOAD
                    </span>
                  </div>
                  {student.name === 'Zara Ahmad' && (
                    <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 blur-2xl rounded-full" />
                  )}
                </motion.div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 border border-dashed border-white/5 text-white/20 font-mono text-[9px] uppercase tracking-widest hover:border-primary/50 hover:text-primary transition-all rounded-xl">SYNC_FULL_DATABASE</button>
          </div>
        </div>

        {/* Right Content: Student Details */}
        <div className="lg:col-span-8 space-y-10">
          {/* Profile Header */}
          <div className="immersive-card rounded-2xl p-10 shadow-2xl relative overflow-hidden border-l-2 border-primary">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
              <div className="relative group shrink-0">
                <img 
                  className="w-40 h-40 rounded-xl object-cover border border-white/10 shadow-2xl group-hover:border-primary/50 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWh2EOdXpNuTNWqmFaX69Vp8610ryAkDTQmrNCTdLbPNGB9Ccfo1FnbP1YR-9LbshA8-Dg9UqtqPnXvEI5yssiEAJ5RtLFiB2vK0skqnzMdi1vmYfSiNJ4iPDs1s01g2DgjRGDc4eekOfT9h6sHQNCp5oY4bxXmQ1c3dDcWwYlrBKeQbFfCrrEMWS2Eh6fKlUw0POBRD6uZ9isdhtFdPDvN89cXlm90JII0iTagVkRIjE9ehRNLSyJ7fAbXceFEdB7WxrNhb2mRvGI" 
                  alt="Zara" 
                />
                <button className="absolute -bottom-3 -right-3 bg-primary text-on-primary p-3 rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-110 active:scale-95 transition-all">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex-1 space-y-8">
                <div className="flex flex-wrap items-center gap-6">
                  <h3 className="text-4xl font-light text-white tracking-widest uppercase">Zara Ahmad</h3>
                  <span className="bg-emerald-400/10 text-emerald-400 text-[10px] font-mono font-bold px-5 py-2 rounded-lg border border-emerald-400/20 uppercase tracking-[0.2em] shadow-glow-primary">PRIME_STATUS: PAID</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div>
                    <p className="text-[9px] font-bold uppercase text-white/30 tracking-[0.3em] mb-3">CURRENT_PROGRAM</p>
                    <p className="text-white font-light text-lg uppercase tracking-wider leading-tight">Advanced Pottery<br/><span className="text-[9px] font-mono text-primary uppercase tracking-widest mt-2 block opacity-60">SYNC: Tue 15:00</span></p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase text-white/30 tracking-[0.3em] mb-3">UP_LINK_PARENT</p>
                    <p className="text-white font-light text-lg uppercase tracking-wider leading-tight">Mrs. Farah Ahmad</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase text-white/30 tracking-[0.3em] mb-3">ENLISTMENT_DATE</p>
                    <p className="text-white font-light text-lg uppercase tracking-wider leading-tight">JANUARY 2023</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-6 pt-4">
                  <button className="flex items-center justify-center gap-3 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] px-10 py-4 rounded-xl font-bold uppercase tracking-[0.3em] text-[10px] transition-all hover:bg-[#25D366]/30 active:scale-95 group overflow-hidden relative">
                    <MessageCircle className="w-4 h-4 fill-current group-hover:scale-125 transition-transform" />
                    COM_SIGNAL_WA
                  </button>
                  <button className="flex items-center justify-center gap-3 border border-white/10 bg-white/5 px-10 py-4 rounded-xl font-bold uppercase tracking-[0.3em] text-[10px] text-white/40 hover:bg-white/10 hover:text-white transition-all group overflow-hidden relative">
                    <Mail className="w-4 h-4 group-hover:scale-125 transition-transform" />
                    SEND_DIRECT_MAIL
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Progress Timeline */}
            <div className="immersive-card rounded-2xl p-8 shadow-2xl flex flex-col h-full bg-gradient-to-br from-white/[0.02] to-transparent">
              <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
                <h4 className="text-[10px] font-bold text-white/40 flex items-center gap-4 uppercase tracking-[0.3em]">
                  <FileText className="w-4 h-4 text-primary" />
                  DEVELOPMENT_LOG
                </h4>
                <button className="text-[9px] font-mono text-primary uppercase tracking-[0.2em] border border-primary/20 bg-primary/5 px-4 py-2 rounded-lg hover:bg-primary/10 transition-all">NEW_LOG_ENTRY</button>
              </div>
              <div className="space-y-12 relative ml-3 flex-1">
                <div className="absolute left-0 top-1 bottom-4 w-[1px] bg-white/5"></div>
                
                <div className="relative pl-12 group/log">
                  <div className="absolute left-[-4px] top-2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#22d3ee] z-10 transition-transform group-hover/log:scale-150 group-hover/log:animate-ping cursor-pointer"></div>
                  <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] mb-2">COORD: 2023.10.24</p>
                  <h5 className="text-lg font-light text-white tracking-wide uppercase mb-3">Centering Mastered</h5>
                  <p className="text-sm text-white/40 font-light leading-relaxed uppercase tracking-tight">Zara has shown great improvement in centering larger clay masses (up to 2kg). Ready for taller cylinder forms.</p>
                </div>
                
                <div className="relative pl-12 group/log opacity-60 hover:opacity-100 transition-opacity">
                  <div className="absolute left-[-4px] top-2 w-2 h-2 bg-white/10 rounded-full border border-white/20 shadow-sm z-10"></div>
                  <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] mb-2">COORD: 2023.10.10</p>
                  <h5 className="text-lg font-light text-white tracking-wide uppercase mb-3">Experimental Glazing</h5>
                  <p className="text-sm text-white/40 font-light leading-relaxed uppercase tracking-tight">Focused on layering matte glazes. Encouraged her to keep a glazing diary.</p>
                </div>
              </div>
            </div>

            {/* Attendance & Payments Column */}
            <div className="space-y-10">
              {/* Attendance History */}
              <div className="immersive-card rounded-2xl p-8 shadow-2xl overflow-hidden relative group">
                <div className="flex items-center justify-between mb-10">
                  <h4 className="text-[10px] font-bold text-white/40 flex items-center gap-4 uppercase tracking-[0.3em]">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    LOAD_EFFICIENCY
                  </h4>
                  <span className="text-primary font-mono text-4xl font-light tracking-tighter">92%</span>
                </div>
                <div className="flex items-end justify-between h-24 gap-4 px-2 relative">
                  {[90, 85, 95, 92, 20].map((h, i) => (
                    <div 
                      key={i} 
                      className={`w-full rounded-t-lg transition-all duration-700 relative overflow-hidden group/bar ${i === 4 ? 'bg-white/5 border border-white/5' : 'bg-primary/20 border border-primary/30'}`} 
                      style={{ height: `${h}%` }}
                    >
                      {i !== 4 && (
                         <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: '100%' }}
                          className="absolute inset-0 bg-primary opacity-40 shadow-[0_0_20px_#22d3ee]"
                        />
                      )}
                      {i === 3 && (
                        <div className="absolute inset-0 bg-primary animate-pulse opacity-20" />
                      )}
                    </div>
                  ))}
                  <div className="absolute h-[1px] w-full bg-white/5 top-1/2 left-0 pointer-events-none"></div>
                </div>
                <div className="flex justify-between mt-6 text-[8px] font-mono font-bold text-white/20 uppercase tracking-[0.4em] px-2">
                  <span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span>
                </div>
              </div>

              {/* Payment History */}
              <div className="immersive-card rounded-2xl p-8 shadow-2xl flex flex-col bg-gradient-to-tr from-transparent to-white/[0.01]">
                <h4 className="text-[10px] font-bold text-white/40 mb-8 flex items-center gap-4 uppercase tracking-[0.4em] border-b border-white/5 pb-4">
                  <History className="w-4 h-4 text-primary" />
                  FISCAL_HISTORY
                </h4>
                <div className="space-y-8 flex-1">
                  {[
                    { title: 'October Fees', id: '10294', date: '2023.10.01', amount: 'RM 250.00' },
                    { title: 'Workshop Materials', id: '10156', date: '2023.09.15', amount: 'RM 85.00' }
                  ].map((p, idx) => (
                    <div key={idx} className="flex justify-between items-center group cursor-pointer border-b border-white/5 pb-4 hover:bg-white/[0.02] px-2 rounded-lg transition-all">
                      <div>
                        <p className="text-sm font-light text-white uppercase tracking-wide group-hover:text-primary transition-colors leading-none mb-2">{p.title}</p>
                        <p className="text-[9px] text-white/20 font-mono uppercase tracking-widest">INV: #{p.id} // TS: {p.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-mono text-white">{p.amount}</p>
                        <p className="text-emerald-400 font-mono uppercase text-[8px] tracking-[0.2em] mt-2 group-hover:animate-pulse">TRANSFER_OK</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-10 py-4 text-[9px] font-bold text-primary uppercase tracking-[0.3em] bg-primary/5 border border-primary/20 rounded-xl hover:bg-primary/10 transition-all active:scale-[0.98]">
                  ACCESS_ALL_LEDGER_DATA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
