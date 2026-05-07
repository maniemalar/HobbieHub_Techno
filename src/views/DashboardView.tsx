import React from 'react';
import { 
  CheckCircle2, 
  Plus, 
  Users, 
  AlertCircle, 
  UserMinus, 
  Clock, 
  ChevronDown, 
  Send, 
  CreditCard,
  ExternalLink,
  MessageSquare,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';

export default function DashboardView() {
  const metrics = [
    { label: 'Total Students', value: '124', trend: '+12%', icon: Users, bgColor: 'bg-secondary-container', iconColor: 'text-primary' },
    { label: 'Payment Alerts', value: '08', badge: 'ACTION REQUIRED', icon: AlertCircle, bgColor: 'bg-error-container', iconColor: 'text-error' },
    { label: 'Absent Today', value: '04', subtext: 'Pending verification', icon: UserMinus, bgColor: 'bg-surface-container', iconColor: 'text-secondary' },
  ];

  const classes = [
    { time: '09:00 AM', name: 'Watercolor Techniques', coach: 'Aminah', room: 'Studio A', enrolled: '12/15', color: 'bg-orange-500', bgColor: 'bg-orange-50', textColor: 'text-orange-700', tag: 'ART' },
    { time: '10:00 AM', name: 'Scratch Fundamentals', coach: 'Kevin', room: 'Tech Lab', enrolled: '08/10', color: 'bg-blue-500', bgColor: 'bg-blue-50', textColor: 'text-blue-700', tag: 'CODING' },
    { time: '11:00 AM', name: 'Piano Grade 1 Intro', coach: 'Siti', room: 'Hall B', enrolled: '15/15', color: 'bg-purple-600', bgColor: 'bg-purple-50', textColor: 'text-purple-700', tag: 'MUSIC', current: true },
    { time: '12:00 PM', name: 'Lego Mindstorms V2', coach: 'Raj', room: 'Studio C', enrolled: '06/12', color: 'bg-emerald-500', bgColor: 'bg-emerald-50', textColor: 'text-emerald-700', tag: 'ROBOTICS', opacity: 'opacity-60' },
  ];

  const parentUpdates = [
    { name: "Mr. Lim (Daniel's Dad)", class: 'Piano Grade 1', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDakQsvZfkTkUkqErnLXHWnsduo5k7rTjebowNfKN9o7avyUy8mtXGNnXPu6dbJFDMJBdx47yW4T-1dIFxtCN5wZ5vN4JBC4iuqGHZJTYkvfQNCzpyvx31gDy63S1FL80iZBMJ2b8z0RAkeSVYdanKeimAeTTLNsFBWZQzTYhNci5JXdQNRteCnUQb_8deRt7GIwIIjndjsVTaGHJKQV52wgLbMIIBzWzABeLJGNEZysmCkDM9_2CAH0hNaeNyn3HZ4I-j_gZKeJkeZ' },
    { name: "Puan Fatimah (Zara's Mom)", class: 'Watercolor', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMZofA8a9LIHilTsw3bVXK_RHcE-IxWhsZfaQKTPyRWqDO2dXe0VFM3SEIqf1KiYZUb9zX21MTCG57YkUhmkV9tqIHn5kfWUW75O6ku81j5XTURRt1_ouq94NB77dsZSh60N7ydjFL5fuwqilt8Q2pWv9tMCyP7FzEK5VdVaYepphk0cFotC2OgBDmsFV7dZacKy65fTstI9HpnB-hqxyKGkiLW3EUAuQfRzYR0Y7iNJ5AzIW0wQkQ2PuANOfUl-AjWIUlPR8Z8iw1' },
  ];

  return (
    <div className="space-y-10 pb-20">
      {/* Welcome Header */}
      <section className="flex flex-col md:flex-row justify-between items-end gap-6 relative">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary"></div>
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">SYSTEM_INIT_COMPLETE</span>
          </div>
          <h2 className="text-4xl font-light text-white tracking-widest uppercase mb-2">Selamat Pagi, Sarah</h2>
          <p className="text-sm text-white/40 font-mono tracking-widest uppercase">STARDATE: 2024.06.12 // SECTOR: MALAYSIA_ARTISAN</p>
        </div>
        <div className="flex gap-4 relative z-10">
          <button className="flex items-center gap-3 bg-white/5 border border-white/10 text-white/80 px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 hover:border-primary/50 transition-all active:scale-95 group">
            <CheckCircle2 className="w-4 h-4 text-primary group-hover:scale-125 transition-transform" />
            ATTENDANCE_LOG
          </button>
          <button className="flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] active:scale-95">
            <Plus className="w-4 h-4" />
            ENROLL_STUDENT
          </button>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={metric.label} 
            className="immersive-card p-8 rounded-2xl flex items-center gap-6 group hover:border-primary/30 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className={`w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${metric.iconColor} group-hover:scale-110 transition-transform`}>
              <metric.icon className="w-8 h-8" />
            </div>
            <div className="relative z-10">
              <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.3em] mb-2">{metric.label}</p>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-light text-white tracking-tighter">{metric.value}</span>
                {metric.trend && (
                  <span className="text-[10px] font-mono text-emerald-400">{metric.trend}</span>
                )}
                {metric.badge && (
                  <span className="text-[9px] font-mono text-rose-500 animate-pulse">{metric.badge}</span>
                )}
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
              <metric.icon className="w-24 h-24" />
            </div>
          </motion.div>
        ))}
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline Schedule */}
        <div className="lg:col-span-2 space-y-8">
          <div className="immersive-card rounded-2xl overflow-hidden">
            <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-white/2">
              <h3 className="text-[11px] font-bold text-white flex items-center gap-4 uppercase tracking-[0.4em]">
                <Clock className="w-5 h-5 text-primary" />
                MISSION_SCHEDULE
              </h3>
              <div className="flex items-center gap-3 text-white/30 font-mono text-[10px] uppercase tracking-widest">
                <span>COORD: 03.1397° N, 101.6869° E</span>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-12 relative before:absolute before:left-[110px] before:top-4 before:bottom-4 before:w-[1px] before:bg-white/5">
                {classes.map((cls) => (
                  <div key={cls.time} className={`flex gap-10 group relative ${cls.opacity || ''}`}>
                    {cls.current && (
                      <div className="absolute left-[34px] top-1/2 -translate-y-1/2 flex items-center gap-2 z-10">
                        <div className="w-2 h-2 bg-primary rounded-full animate-ping shadow-[0_0_10px_#22d3ee]"></div>
                        <div className="h-[1px] w-20 bg-primary/20"></div>
                      </div>
                    )}
                    <div className="w-20 text-right py-2">
                      <span className={`text-xs font-mono tracking-widest ${cls.current ? 'text-primary' : 'text-white/20'}`}>{cls.time}</span>
                    </div>
                    <div className="flex-1">
                      <div className={`bg-white/[0.02] border-l border-white/10 p-6 rounded-r-xl group-hover:bg-white/[0.04] transition-all relative ${cls.current ? 'border-primary/50 shadow-[inset_0_0_20px_rgba(34,211,238,0.05)] bg-primary/[0.02]' : ''}`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[9px] font-mono text-primary uppercase tracking-[0.3em] mb-3 block">{cls.tag}</span>
                            <h4 className="text-xl font-light text-white tracking-wide uppercase mb-2">{cls.name}</h4>
                            <p className="text-white/30 text-xs font-medium tracking-tight uppercase">OPERATOR: {cls.coach} // BAY: {cls.room}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-mono text-white/80">{cls.enrolled}</span>
                            <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest mt-1">CAPACITY</p>
                          </div>
                        </div>
                        {cls.current && (
                          <div className="mt-6 pt-6 border-t border-white/5 flex justify-end">
                            <button className="text-[9px] font-bold text-primary uppercase tracking-[0.2em] px-5 py-2 border border-primary/20 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all">
                              LOG_ATTENDANCE
                            </button>
                          </div>
                        )}
                        <div className={`absolute top-0 right-0 w-32 h-full opacity-[0.03] pointer-events-none ${cls.color.replace('bg-', 'text-')}`}>
                           <ExternalLink className="w-full h-full p-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Side Cards */}
        <div className="space-y-8">
          {/* Quick Updates */}
          <div className="immersive-card rounded-2xl overflow-hidden">
            <div className="px-8 py-5 border-b border-white/5 flex justify-between items-center">
              <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">COMM_FEED</h4>
              <span className="text-[9px] text-primary font-mono cursor-pointer hover:underline uppercase tracking-tight">SYNC_ALL</span>
            </div>
            <div className="p-8 space-y-8">
              {parentUpdates.map((update) => (
                <div key={update.name} className="flex items-center gap-6 group cursor-pointer">
                  <div className="relative">
                    <img className="w-12 h-12 rounded-lg object-cover border border-white/10 group-hover:border-primary/50 transition-all shadow-lg" src={update.avatar} alt={update.name} />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white leading-tight uppercase tracking-wide group-hover:text-primary transition-colors">{update.name}</p>
                    <p className="text-[9px] text-white/30 font-mono uppercase tracking-widest mt-1">DATA: {update.class}</p>
                  </div>
                  <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white/40 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all shadow-sm">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button className="w-full py-4 border border-dashed border-white/10 text-white/30 font-bold text-[10px] uppercase tracking-[0.2em] rounded-xl hover:border-primary hover:text-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-3">
                <MessageSquare className="w-4 h-4" />
                BROADCAST_SIGNAL
              </button>
            </div>
          </div>

          {/* Billing Overview */}
          <div className="immersive-card rounded-2xl p-8 border-l-2 border-primary overflow-hidden relative">
            <div className="flex items-center gap-4 text-primary font-bold mb-8 uppercase tracking-[0.2em] text-[11px]">
              <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
                <CreditCard className="w-3.5 h-3.5" />
              </div>
              FISCAL_STATUS
            </div>
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/40 uppercase tracking-widest font-mono">Uncollected</span>
                <span className="font-mono text-white">RM 4,250.00</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/40 uppercase tracking-widest font-mono">Dormant</span>
                <span className="font-mono text-rose-500">08 UNITS</span>
              </div>
              <div className="space-y-3">
                <div className="w-full bg-white/5 h-[2px] rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[75%] shadow-[0_0_10px_#22d3ee]"></div>
                </div>
                <p className="text-[9px] text-white/20 font-mono uppercase tracking-[0.2em]">75% COLLECTION_EFFICIENCY</p>
              </div>
              <button className="w-full py-4 bg-white/5 border border-white/10 text-[9px] font-bold text-white uppercase tracking-[0.3em] rounded-lg hover:bg-white/10 transition-all">
                INIT_LEDGER_REVIEW
              </button>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-[0.02]">
              <TrendingUp className="w-40 h-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
