import React from 'react';
import { 
  FileDown, 
  Send, 
  Search, 
  CreditCard, 
  CheckCircle2, 
  AlertCircle, 
  MoreVertical, 
  ArrowRight,
  TrendingUp,
  Banknote,
  QrCode,
  Mail,
  History
} from 'lucide-react';
import { motion } from 'motion/react';

export default function PaymentsView() {
  const tableData = [
    { name: 'Adam Hakim', amount: 'RM 350.00', date: '15 Oct 2023', status: 'PAID', method: 'QR Payment', icon: QrCode, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4nbrxB00NhCeN-XAnCypPWw2eM9rMcDIKLCEAU3VWDnkG60hfRSVgFJfwo2jZlZGHGu8YFLd8xw-Xx1G7IF3w6RzN72I_R-MN1J7USYy9FiuB38uH6N00C6nUcuUMSu9Onv9M8Vv91Y2g4Zr5HoVRptSz9Lh3hEKilk60SAACFI_s13lw7u8WCRWjX4XuC2MMRYCG9wY5aTLKpAoQJ2HVyr5rwWjzoF6JzVrBCQ9kOHy1f1zvDtfAweA9ejONjoZ8yzr7Yz3fau0_' },
    { name: 'Siti Yasmin', amount: 'RM 350.00', date: '15 Oct 2023', status: 'OVERDUE', method: '-', remind: true },
    { name: 'Leila Wong', amount: 'RM 350.00', date: '15 Oct 2023', status: 'PENDING', method: 'Online Transfer', icon: CreditCard, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7rZ6Zcm2VxWQtufEwppM4nVENYUaw1pH88oM9xSZCQaOIHsfZpDWqYMuU-ZodEf4rF_lmgB1IDbS7Pc6XUqWcHDS0sz1c0YgcNbVSMpCdZ1Vv2U8VPs2acNEDMY5q_OytC8-v35gCzrWaPXz5a0JNvk6_AiCoH59Ylg0N4q00RubiTRx4LY8vKx1FoHEJ_eYLECO1ai27ZEMBto5FAa192uVj9IvcfqK7cr1I-DHmHg7gZUATwdEj_M3nF0ErpZZOJa800IlWpJhV' },
  ];

  return (
    <div className="space-y-10 pb-20">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 relative">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary"></div>
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">FISCAL_DASHBOARD</span>
          </div>
          <h2 className="text-4xl font-light text-white tracking-widest uppercase mb-2">Payments & Fees</h2>
          <p className="text-sm text-white/40 font-mono tracking-widest uppercase">SYD_OCT_2023 // 100%_INTEGRITY</p>
        </div>
        <div className="flex gap-4 relative z-10">
          <button className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white/40 rounded-xl font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white/10 hover:text-white transition-all group overflow-hidden">
            <FileDown className="w-4 h-4 group-hover:scale-125 transition-transform" />
            EXPORT_PDF
          </button>
          <button className="flex items-center gap-3 px-8 py-4 bg-primary text-on-primary rounded-xl font-bold text-[10px] uppercase tracking-[0.3em] hover:brightness-110 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] group relative overflow-hidden">
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            MASS_SIGNAL_REMINDER
          </button>
        </div>
      </div>

      {/* Summary Bento Boxes */}
      <div className="grid grid-cols-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="col-span-12 lg:col-span-4 bg-primary text-on-primary rounded-3xl p-10 shadow-[0_0_40px_rgba(34,211,238,0.2)] flex flex-col justify-between relative overflow-hidden group border border-white/10"
        >
          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase opacity-60 tracking-[0.4em] mb-6">MONTHLY_REVENUE</p>
            <h3 className="text-5xl font-light tracking-tighter uppercase">RM 12,450.00</h3>
            <div className="mt-6 bg-white/10 w-fit px-4 py-1.5 rounded-lg text-[9px] font-mono uppercase tracking-[0.1em] border border-white/10">
              +12% DELTA_MONTH
            </div>
          </div>
          <div className="mt-16 flex items-end justify-between relative z-10">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold uppercase opacity-50 tracking-[0.3em] mb-3">TARGET_COLLECTION</span>
              <span className="text-2xl font-light tracking-tighter uppercase">RM 15,000.00</span>
            </div>
            <CreditCard className="w-20 h-20 opacity-10 absolute -right-6 -bottom-6 group-hover:scale-125 transition-transform duration-700 -rotate-12" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
        </motion.div>
        
        <div className="col-span-12 lg:col-span-4 immersive-card rounded-3xl p-10 shadow-2xl flex items-center gap-8 group hover:border-primary/40 transition-all cursor-pointer">
          <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform relative overflow-hidden">
            <CheckCircle2 className="w-10 h-10" />
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-all" />
          </div>
          <div>
            <p className="text-white/20 font-bold text-[10px] uppercase tracking-[0.3em] mb-3">SYNCHRONIZED_ENTITIES</p>
            <p className="text-4xl font-light text-white tracking-tighter uppercase">42 <span className="text-xl font-mono text-white/20">/ 50</span></p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 immersive-card rounded-3xl p-10 shadow-2xl flex items-center gap-8 group hover:border-rose-500/40 transition-all cursor-pointer border-r-2 border-rose-500/20">
          <div className="w-20 h-20 rounded-2xl bg-rose-500/5 border border-rose-500/10 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform relative overflow-hidden">
            <AlertCircle className="w-10 h-10" />
            <div className="absolute inset-0 bg-rose-500/5 group-hover:bg-rose-500/20 transition-all" />
          </div>
          <div>
            <p className="text-white/20 font-bold text-[10px] uppercase tracking-[0.3em] mb-3">PENDING_LATENCY</p>
            <p className="text-4xl font-light text-white tracking-tighter uppercase">RM 2,550.00</p>
            <p className="text-rose-500 font-mono text-[9px] uppercase tracking-widest mt-3 animate-pulse">08 FAIL_STATES</p>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="space-y-10">
        <div className="immersive-card rounded-2xl overflow-hidden shadow-2xl">
          <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-white/2">
            <div className="flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-sm bg-primary shadow-[0_0_10px_#22d3ee] animate-pulse" />
              <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.4em]">POTTERY_GENESIS // SAT_10:00</h4>
            </div>
            <span className="px-5 py-2 bg-white/5 text-white/30 font-mono text-[10px] rounded-lg border border-white/10 uppercase tracking-widest">12_NODES_ACTIVE</span>
          </div>
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-white/[0.02] border-b border-white/5">
                  <th className="px-8 py-6 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">USER_IDENTITY</th>
                  <th className="px-8 py-6 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">CREDIT_LOAD</th>
                  <th className="px-8 py-6 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">TIME_STAMP</th>
                  <th className="px-8 py-6 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">SYNC_STATUS</th>
                  <th className="px-8 py-6 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">PROTOCOL</th>
                  <th className="px-8 py-6 text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] text-right">OPERATIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/2">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.03] transition-all group border-white/2 cursor-pointer">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-5">
                        {row.avatar ? (
                          <img className="w-10 h-10 rounded-lg object-cover border border-white/10 group-hover:border-primary/50 transition-all" src={row.avatar} alt={row.name} />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary font-mono text-[10px] font-bold uppercase group-hover:border-primary transition-all">SY</div>
                        )}
                        <span className="text-sm font-light text-white uppercase tracking-tight group-hover:text-primary transition-colors">{row.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-mono text-white text-sm">{row.amount}</td>
                    <td className="px-8 py-6 text-white/30 font-mono text-[11px] uppercase tracking-widest">{row.date}</td>
                    <td className="px-8 py-6">
                      <span className={`inline-flex items-center px-4 py-1.5 rounded-lg text-[9px] font-mono uppercase tracking-widest border ${
                        row.status === 'PAID' ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' : 
                        row.status === 'OVERDUE' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20 animate-pulse' : 'bg-amber-400/10 text-amber-400 border-amber-400/20'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3 text-white/30 font-mono text-[10px] uppercase tracking-widest">
                        {row.icon && <row.icon className="w-3.5 h-3.5 text-primary opacity-50" />}
                        <span>{row.method}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      {row.remind ? (
                        <button className="text-[9px] font-bold text-primary uppercase tracking-[0.2em] px-5 py-2 border border-primary/20 bg-primary/5 rounded-lg hover:bg-primary/10 transition-all">RE_SYNC</button>
                      ) : (
                        <button className="p-2 text-white/10 hover:text-primary transition-all group-hover:text-white/40">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-5 bg-white/[0.01] text-center border-t border-white/5 transition-all hover:bg-white/[0.03]">
            <button className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] hover:brightness-125 flex items-center gap-4 mx-auto group">
              SCAN_FULL_DIRECTORY
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 immersive-card rounded-2xl p-8 shadow-2xl relative overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">
          <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] mb-10 border-b border-white/5 pb-4 flex items-center gap-4">
            <History className="w-5 h-5 text-primary" />
            SIGNAL_HISTORY
          </h4>
          <div className="space-y-10 relative ml-3">
            <div className="absolute left-[-2px] top-2 bottom-2 w-[1px] bg-white/5" />
            {[
              { label: 'USER_AKH_SYNCED: RM 350.00', time: '2H_AGO // QR_PROTOCOL', icon: CheckCircle2, color: 'bg-emerald-400 shadow-[0_0_15px_#34d399]' },
              { label: 'REMINDER_DISPATCHED: USER_YSM', time: '5H_AGO // COM_SIGNAL_WA', icon: Mail, color: 'bg-white/10 border border-white/10' },
              { label: 'USER_TCH_SYNCED: RM 280.00', time: '1D_AGO // CASH_OVERRIDE', icon: CheckCircle2, color: 'bg-emerald-400 shadow-[0_0_15px_#34d399]' }
            ].map((log, idx) => (
              <div key={idx} className="flex gap-6 relative group cursor-pointer">
                <div className={`w-10 h-10 rounded-lg ${log.color} flex items-center justify-center z-10 shrink-0 group-hover:scale-110 group-hover:brightness-125 transition-all border border-white/10`}>
                  <log.icon className={`w-5 h-5 ${log.color.includes('emerald') ? 'text-white' : 'text-white/40'}`} />
                </div>
                <div>
                  <p className="text-sm font-light text-white group-hover:text-primary transition-colors leading-tight uppercase tracking-tight mb-2">{log.label}</p>
                  <p className="text-[9px] font-mono font-bold text-white/20 uppercase tracking-widest">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-12 py-4 bg-white/5 border border-white/10 text-[9px] font-bold text-white/40 uppercase tracking-[0.3em] rounded-xl hover:bg-white/10 hover:text-white transition-all">ACCESS_FULL_LOGS</button>
        </div>

        <div className="lg:col-span-7 immersive-card rounded-2xl p-10 shadow-2xl flex flex-col border-r-2 border-primary">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 relative z-10">
            <h4 className="text-[11px] font-bold text-white flex items-center gap-4 uppercase tracking-[0.4em]">
              <TrendingUp className="w-6 h-6 text-primary" />
              COLLECTION_TREND_DELTA
            </h4>
            <div className="bg-white/5 p-1 rounded-xl flex gap-2 border border-white/10">
              {['6_MONTH_DELTA', 'YEAR_SYNC'].map((opt, i) => (
                <button key={opt} className={`px-6 py-2.5 rounded-lg text-[9px] font-bold uppercase tracking-[0.2em] transition-all ${i === 0 ? 'bg-primary text-on-primary shadow-lg' : 'text-white/30 hover:text-white'}`}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-end justify-between gap-6 h-60 min-h-[280px] pb-8 px-4 relative group z-10">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.03]">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-px w-full bg-white" />)}
            </div>
            {[40, 55, 50, 75, 85, 95].map((h, i) => (
              <div 
                key={i} 
                className={`flex-1 rounded-xl transition-all duration-1000 relative group/bar relative overflow-hidden cursor-pointer ${i === 5 ? 'bg-primary shadow-[0_0_30px_rgba(34,211,238,0.3)]' : 'bg-white/[0.03] border border-white/5 hover:bg-white/[0.08]'}`} 
                style={{ height: `${h}%` }}
              >
                 {i === 5 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    className="absolute inset-0 bg-white/20 animate-pulse"
                  />
                )}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md border border-white/10 text-white font-mono text-[9px] px-3 py-1.5 rounded opacity-0 group-hover/bar:opacity-100 transition-all whitespace-nowrap z-20 shadow-2xl">
                  RM {(h * 150).toLocaleString()}.00
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[9px] font-mono font-bold text-white/20 tracking-[0.4em] uppercase px-6 pt-6 border-t border-white/5 mt-6 z-10">
            {['MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT'].map((m, i) => (
              <span key={m} className={i === 5 ? 'text-primary' : ''}>{m}</span>
            ))}
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
