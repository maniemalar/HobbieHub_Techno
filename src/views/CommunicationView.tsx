import React from 'react';
import { 
  Sparkles, 
  Send, 
  Mail, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Eye,
  Type,
  Bold,
  Italic,
  Link,
  Variable,
  Layers,
  ChevronRight,
  TrendingUp,
  MessageCircle,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';

export default function CommunicationView() {
  const templates = [
    { title: 'Attendance Reminder', desc: '"Friendly reminder for today\'s Pottery..."', icon: Clock, color: 'text-primary', bgColor: 'bg-primary/10' },
    { title: 'Fee Due Notice', desc: '"Class fees for March are now due..."', icon: AlertCircle, color: 'text-tertiary', bgColor: 'bg-tertiary/10' },
    { title: 'Progress Update', desc: '"Exciting news! Your child just mastered..."', icon: TrendingUp, color: 'text-primary', bgColor: 'bg-primary-container/10' },
    { title: 'Class Cancellation', desc: '"Important: Today\'s 4PM session is..."', icon: MessageSquare, color: 'text-error', bgColor: 'bg-error-container/10' },
  ];

  const logs = [
    { recipient: 'Pottery Advanced B', type: 'Attendance Reminder', time: 'Today, 09:15 AM', status: 'DELIVERED', methods: [true, false], isGroup: true },
    { recipient: 'Sarah Tan', type: 'Progress Update', time: 'Yesterday, 04:30 PM', status: 'READ', methods: [false, true], avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmuNEJS_H-ASvGzwC0xhYxlr6jt_H56llRIyDZ5anyP3Vz2jDupyVVn1gfSbGECoz5Hg3_20z9CDA31a0pXeuV1iehuMJd0AjTUk2xRRIU8YemXRvPTpci8BGg20gHPAC0oKl96b3jPXCwrmYQKUH8RX6BFDUXDCE_c1TWvPhOkz3eh1q5MXbyBe1jNs4YpG_7A7Eajrpg1VrvDvfj4mmbYuZmc6mhbd0kAZk0F-d2zoRKWycBwJt2JFGyhA2ccoSXf-JQdH9CnTuP' },
    { recipient: 'All Parents (Summer Camp)', type: 'Fee Due Notice', time: '22 Oct, 10:00 AM', status: 'PARTIAL', methods: [true, true], isGroup: true },
  ];

  return (
    <div className="space-y-10 pb-20">
      <header className="relative">
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div className="w-8 h-[2px] bg-primary"></div>
          <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">COM_NETWORK_LAYER</span>
        </div>
        <h2 className="text-4xl font-light text-white tracking-widest uppercase mb-2 relative z-10">Parent Nexus</h2>
        <p className="text-sm text-white/40 font-mono tracking-widest uppercase relative z-10">SIGNAL_DISPATCH // 98.2%_REACH_LOADED</p>
      </header>

      <div className="grid grid-cols-12 gap-10">
        {/* Left Column: Templates */}
        <div className="col-span-12 lg:col-span-4 space-y-10">
          <div className="immersive-card p-8 rounded-2xl shadow-2xl flex flex-col bg-gradient-to-br from-white/[0.02] to-transparent">
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
              <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.4em] flex items-center gap-4">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                COM_TEMPLATES
              </h3>
            </div>
            
            <div className="space-y-6">
              {templates.map((tpl, i) => (
                <motion.button 
                  whileHover={{ x: 4 }}
                  key={i} 
                  className="group text-left p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:border-primary/50 transition-all w-full active:scale-[0.98] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-full" />
                  <div className="flex items-center gap-5 mb-4 relative z-10">
                    <div className={`bg-white/5 text-primary p-3 rounded-lg border border-white/5 group-hover:border-primary transition-all group-hover:scale-110`}>
                      <tpl.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-[0.3em] group-hover:text-white transition-colors">{tpl.title}</span>
                  </div>
                  <p className="text-[11px] text-white/20 font-light italic line-clamp-1 group-hover:text-white/40 transition-colors uppercase tracking-tight">
                    {tpl.desc}
                  </p>
                </motion.button>
              ))}
            </div>
            <button className="mt-10 w-full py-5 text-[9px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/20 bg-primary/5 rounded-xl hover:bg-primary/10 transition-all shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              INIT_CUSTOM_TEMPLATE
            </button>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="immersive-card p-10 rounded-3xl shadow-2xl relative overflow-hidden group border-l-2 border-primary"
          >
            <div className="relative z-10">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-white/20 mb-6">SIGNAL_PRECISION</h4>
              <div className="flex items-end gap-4 mb-10">
                <span className="text-5xl font-light text-white tracking-tighter uppercase leading-none">98.2%</span>
                <span className="mb-2 text-[9px] font-mono font-bold uppercase text-emerald-400 tracking-widest">+04% DELTA_MONTH</span>
              </div>
              <div className="flex gap-4 h-24 items-end px-1 relative">
                <div className="absolute inset-0 flex flex-col justify-between opacity-5">
                  <div className="h-px w-full bg-white" />
                  <div className="h-px w-full bg-white" />
                </div>
                {[40, 60, 85, 70, 95].map((h, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 rounded-sm transition-all duration-1000 relative overflow-hidden ${i === 4 ? 'bg-primary shadow-[0_0_20px_#22d3ee]' : 'bg-white/5 hover:bg-white/10'}`} 
                    style={{ height: `${h}%` }}
                  >
                    {i === 4 && (
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Layers className="absolute -right-8 -bottom-8 w-48 h-48 text-primary opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] rounded-full" />
          </motion.div>
        </div>

        {/* Center: Compose */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-10">
          <div className="immersive-card p-10 rounded-3xl shadow-2xl flex flex-col h-full bg-gradient-to-tr from-white/[0.01] to-transparent group border-l-2 border-primary">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 pb-6 border-b border-white/5 gap-6">
              <h3 className="text-[12px] font-bold text-white tracking-[0.4em] flex items-center gap-6 uppercase">
                <div className="w-1.5 h-12 bg-primary rounded-sm shadow-[0_0_15px_#22d3ee] group-hover:scale-y-110 transition-transform origin-center" />
                SIGNAL_COMPOSER
              </h3>
              <div className="flex gap-4">
                <button className="px-8 py-3 rounded-xl border border-white/10 bg-white/5 text-white/40 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white/10 hover:text-white transition-all flex items-center gap-4">
                  <ArrowRight className="w-4 h-4 rotate-180 opacity-40" />
                  PERSISTED_DRAFTS
                </button>
              </div>
            </div>

            <div className="space-y-12 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { id: 'all', label: 'BROADCAST_ALL', icon: Users, active: true },
                  { id: 'class', label: 'LOCAL_MODULE', icon: Layers },
                  { id: 'solo', label: 'TARGETED_ID', icon: MessageCircle },
                ].map((opt) => (
                  <label key={opt.id} className={`cursor-pointer border border-white/5 rounded-2xl p-8 flex flex-col items-center gap-6 transition-all relative group/opt overflow-hidden ${
                    opt.active ? 'bg-primary/10 border-primary/30 shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]' : 'bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10'
                  }`}>
                    <input name="recipient" type="radio" className="hidden" defaultChecked={opt.active} />
                    <div className={`p-4 rounded-xl transition-all ${opt.active ? 'bg-primary text-on-primary shadow-glow-primary' : 'bg-white/5 text-white/20'}`}>
                      <opt.icon className="w-8 h-8" />
                    </div>
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-[0.3em] ${opt.active ? 'text-primary' : 'text-white/20'}`}>{opt.label}</span>
                    {opt.active && (
                       <div className="absolute top-0 right-0 w-8 h-8 bg-primary flex items-center justify-center rounded-bl-xl">
                          <CheckCircle2 className="w-4 h-4 text-on-primary" />
                       </div>
                    )}
                  </label>
                ))}
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center px-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">PAYLOAD_BUFFER</label>
                  <span className="text-[9px] font-mono text-white/10 uppercase tracking-widest">CHAR_LIMIT: 1000_BYTES</span>
                </div>
                <div className="immersive-card rounded-2xl p-8 min-h-[400px] bg-white/[0.02] border border-white/5 group/editor relative transition-all focus-within:border-primary/40 focus-within:bg-primary/[0.02]">
                  <div className="flex flex-wrap gap-6 mb-10 pb-6 border-b border-white/5 items-center relative z-10">
                    <button className="p-3 bg-white/5 border border-white/5 hover:border-primary/50 rounded-lg transition-all text-white/20 hover:text-primary"><Bold className="w-4.5 h-4.5" /></button>
                    <button className="p-3 bg-white/5 border border-white/5 hover:border-primary/50 rounded-lg transition-all text-white/20 hover:text-primary"><Italic className="w-4.5 h-4.5" /></button>
                    <button className="p-3 bg-white/5 border border-white/5 hover:border-primary/50 rounded-lg transition-all text-white/20 hover:text-primary"><Link className="w-4.5 h-4.5" /></button>
                    <div className="w-px bg-white/5 h-6 mx-2" />
                    <button className="flex items-center gap-4 px-6 py-3 bg-primary/10 border border-primary/20 text-primary rounded-lg text-[9px] font-mono font-bold uppercase tracking-[0.2em] hover:bg-primary/20 transition-all shadow-glow-primary active:scale-95">
                      <Variable className="w-4 h-4" />
                      INJECT_VAR
                    </button>
                  </div>
                  <textarea 
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-white font-light text-lg uppercase tracking-wider min-h-[250px] resize-none placeholder:text-white/10 placeholder:italic leading-relaxed tracking-widest" 
                    placeholder="ENTER_PAYLOAD_DATA..._SMART_SYNC_ACTIVE"
                  />
                  <div className="absolute bottom-8 right-8 opacity-0 group-focus-within/editor:opacity-100 transition-opacity">
                    <div className="flex items-center gap-4 bg-emerald-400/10 border border-emerald-400/20 px-4 py-2 rounded-lg">
                       <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                       <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest leading-none">AUTO_SAVE_SUCCESS</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-10">
                <div className="flex gap-12 w-full md:w-auto relative z-10">
                  <label className="flex items-center gap-4 cursor-pointer group/cb">
                    <input defaultChecked className="peer hidden" type="checkbox" />
                    <div className="w-7 h-7 rounded-lg border-2 border-white/5 flex items-center justify-center transition-all bg-white/5 peer-checked:bg-primary peer-checked:border-primary shadow-inner">
                       <CheckCircle2 className="opacity-0 peer-checked:opacity-100 w-5 h-5 text-on-primary transition-opacity" />
                    </div>
                    <span className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 peer-checked:text-white group-hover/cb:text-white/60 transition-colors">
                      <MessageCircle className="w-5 h-5 text-[#25D366] opacity-60" /> WHATSAPP
                    </span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group/cb">
                    <input className="peer hidden" type="checkbox" />
                    <div className="w-7 h-7 rounded-lg border-2 border-white/5 flex items-center justify-center transition-all bg-white/5 peer-checked:bg-primary peer-checked:border-primary shadow-inner">
                       <CheckCircle2 className="opacity-0 peer-checked:opacity-100 w-5 h-5 text-on-primary transition-opacity" />
                    </div>
                    <span className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 peer-checked:text-white group-hover/cb:text-white/60 transition-colors">
                      <Mail className="w-5 h-5 text-primary opacity-60" /> EMAIL_SYNC
                    </span>
                  </label>
                </div>
                <div className="flex gap-6 w-full md:w-auto relative z-10">
                  <button className="flex-1 md:flex-none px-10 py-5 rounded-xl border border-primary/20 bg-primary/5 text-primary font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-primary/10 transition-all active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.1)]">SCHEDULE_QUEUE</button>
                  <button className="flex-1 md:flex-none px-14 py-5 rounded-xl bg-primary text-on-primary font-bold text-[10px] uppercase tracking-[0.4em] hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center justify-center gap-4 group">
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    DISPATCH_NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          </div>
        </div>

        {/* Bottom Log */}
        <div className="col-span-12">
          <div className="immersive-card rounded-3xl shadow-2xl overflow-hidden group border-t-2 border-primary">
            <div className="px-10 py-8 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
              <h3 className="text-[12px] font-bold text-white uppercase tracking-[0.5em]">SIGNAL_DISPATCH_LEDGER</h3>
              <button className="flex items-center gap-4 text-primary font-bold text-[10px] uppercase tracking-[0.3em] hover:brightness-125 transition-all group/lnk">
                COMPLETE_ARCHIVE
                <ArrowRight className="w-4 h-4 group-hover/lnk:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left min-w-[900px]">
                <thead>
                  <tr className="bg-white/[0.02] border-b border-white/5">
                    <th className="py-8 px-10 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">NODE_TARGET</th>
                    <th className="py-8 px-10 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">SIGNAL_TYPE</th>
                    <th className="py-8 px-10 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">TIME_STAMP</th>
                    <th className="py-8 px-10 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">DELIVERY_LOAD</th>
                    <th className="py-8 px-10 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">SYNC_SUCCESS</th>
                    <th className="py-8 px-10 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] text-right">MONITOR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/2">
                  {logs.map((log, i) => (
                    <tr key={i} className="hover:bg-white/[0.03] transition-all group/row cursor-pointer">
                      <td className="py-8 px-10">
                        <div className="flex items-center gap-6">
                          {log.avatar ? (
                            <img className="w-12 h-12 rounded-lg object-cover border border-white/10 group-hover/row:border-primary/50 transition-all shadow-xl" src={log.avatar} alt={log.recipient} />
                          ) : (
                            <div className={`w-12 h-12 rounded-lg border border-white/5 ${log.isGroup ? 'bg-primary/10 text-primary shadow-[0_0_15px_rgba(34,211,238,0.1)]' : 'bg-white/5 text-white/20'} flex items-center justify-center transition-all group-hover/row:border-primary/40`}>
                              {log.isGroup ? <Users className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
                            </div>
                          )}
                          <span className="text-sm font-light text-white uppercase tracking-tight group-hover/row:text-primary transition-colors leading-none">{log.recipient}</span>
                        </div>
                      </td>
                      <td className="py-8 px-10 text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">{log.type}</td>
                      <td className="py-8 px-10 text-[11px] font-mono text-white/20 uppercase tracking-widest">{log.time}</td>
                      <td className="py-8 px-10">
                        <div className="flex gap-6">
                          <MessageCircle className={`w-6 h-6 transition-all ${log.methods[0] ? 'text-emerald-400 group-hover/row:scale-110' : 'text-white/5'}`} />
                          <Mail className={`w-6 h-6 transition-all ${log.methods[1] ? 'text-primary group-hover/row:scale-110' : 'text-white/5'}`} />
                        </div>
                      </td>
                      <td className="py-8 px-10">
                        <span className={`inline-block px-5 py-2 rounded-lg text-[9px] font-mono uppercase tracking-[0.2em] border ${
                          log.status === 'DELIVERED' || log.status === 'READ' ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]' : 'bg-amber-400/10 text-amber-400 border-amber-400/20'
                        }`}>
                          {log.status}
                        </span>
                      </td>
                      <td className="py-8 px-10 text-right">
                        <button className="p-4 bg-white/5 border border-white/10 rounded-xl text-white/10 hover:text-primary hover:border-primary/40 transition-all active:scale-75 relative group/btn overflow-hidden">
                          <Eye className="w-5 h-5 relative z-10" />
                          <div className="absolute inset-0 bg-primary/0 group-hover/btn:bg-primary/5 transition-all" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
