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
    <div className="space-y-8 pb-20">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">Payments & Fees</h2>
          <p className="text-sm text-gray-500 font-medium">Monthly revenue and collection status</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all active:scale-[0.98]">
            <FileDown className="w-4 h-4 text-gray-400" />
            Export Data
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm active:scale-[0.98]">
            <Send className="w-4 h-4" />
            Send Reminders
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-12 lg:col-span-4 bg-gray-900 text-white rounded-xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="relative z-10">
            <p className="text-[11px] font-bold uppercase text-gray-400 tracking-wider mb-6">Monthly Revenue</p>
            <h3 className="text-4xl font-bold tracking-tight">RM 12,450.00</h3>
            <div className="mt-4 bg-white/10 w-fit px-3 py-1 rounded-md text-[10px] font-bold tracking-tight border border-white/10">
              +12.4% vs last month
            </div>
          </div>
          <div className="mt-12 flex items-end justify-between relative z-10">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Target</span>
              <span className="text-xl font-bold tracking-tight text-gray-300">RM 15,000.00</span>
            </div>
            <CreditCard className="w-16 h-16 text-white/5 absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform duration-700" />
          </div>
        </motion.div>
        
        <div className="col-span-12 lg:col-span-4 minimal-card rounded-xl p-8 shadow-sm flex items-center gap-6 bg-white border border-gray-100 group transition-all cursor-pointer">
          <div className="w-14 h-14 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <p className="text-gray-400 font-bold text-[11px] uppercase tracking-wider mb-1">Collected</p>
            <p className="text-3xl font-bold text-gray-900 tracking-tight">42 <span className="text-lg font-medium text-gray-300">/ 50</span></p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 minimal-card rounded-xl p-8 shadow-sm flex items-center gap-6 bg-white border border-gray-100 group transition-all cursor-pointer">
          <div className="w-14 h-14 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shrink-0">
            <AlertCircle className="w-7 h-7" />
          </div>
          <div>
            <p className="text-gray-400 font-bold text-[11px] uppercase tracking-wider mb-1">Pending Fees</p>
            <p className="text-3xl font-bold text-gray-900 tracking-tight">RM 2,550.00</p>
            <p className="text-red-500 font-bold text-[10px] uppercase tracking-tight mt-1">8 students overdue</p>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="space-y-6">
        <div className="minimal-card rounded-xl overflow-hidden shadow-sm bg-white border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gray-900" />
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">October Fee Record</h4>
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Pottery Genesis • Saturday 10:00</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-50 bg-white">
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Student</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Method</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-all group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {row.avatar ? (
                          <img className="w-9 h-9 rounded-lg object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all border border-gray-100" src={row.avatar} alt={row.name} />
                        ) : (
                          <div className="w-9 h-9 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 font-bold text-[10px] uppercase">SY</div>
                        )}
                        <span className="text-sm font-bold text-gray-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">{row.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900 text-sm tracking-tight">{row.amount}</td>
                    <td className="px-6 py-4 text-gray-400 font-bold text-[11px] uppercase tracking-tighter">{row.date}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight border border-transparent ${
                        row.status === 'PAID' ? 'bg-green-50 text-green-700' : 
                        row.status === 'OVERDUE' ? 'bg-red-50 text-red-700 animate-pulse' : 'bg-amber-50 text-amber-700'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-tight">
                        {row.icon && <row.icon className="w-3.5 h-3.5 text-gray-300" />}
                        <span>{row.method}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {row.remind ? (
                        <button className="text-[10px] font-bold text-gray-900 uppercase tracking-wider px-4 py-1.5 border border-gray-200 bg-white rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all active:scale-[0.98]">Remind</button>
                      ) : (
                        <button className="p-2 text-gray-200 hover:text-gray-900 transition-all">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-gray-50/50 text-center border-t border-gray-50 transition-all hover:bg-gray-100/50">
            <button className="text-[11px] font-bold text-gray-500 uppercase tracking-widest hover:text-gray-900 flex items-center justify-center gap-2 mx-auto group">
              View Full Directory
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 minimal-card rounded-xl p-8 border border-gray-100 flex flex-col bg-white">
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-50 pb-4 flex items-center gap-3">
            <History className="w-4 h-4 text-gray-400" />
            Collection Logs
          </h4>
          <div className="space-y-8 flex-1">
            {[
              { label: 'Adam Hakim Paid: RM 350.00', time: '2 hours ago • QR Code', icon: CheckCircle2, color: 'bg-green-50 text-green-600 border-green-100' },
              { label: 'Reminder sent to Siti Yasmin', time: '5 hours ago • via WhatsApp', icon: Mail, color: 'bg-gray-50 text-gray-500 border-gray-100' },
              { label: 'Leila Wong Transfer Paid', time: '1 day ago • Online Transfer', icon: CheckCircle2, color: 'bg-green-50 text-green-600 border-green-100' }
            ].map((log, idx) => (
              <div key={idx} className="flex gap-4 relative group cursor-pointer">
                <div className={`w-10 h-10 rounded-lg ${log.color} flex items-center justify-center z-10 shrink-0 border transition-all group-hover:scale-110 shadow-sm`}>
                  <log.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors leading-tight mb-1">{log.label}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-3.5 bg-gray-50 border border-gray-200 text-[11px] font-bold text-gray-500 uppercase tracking-wider rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all active:scale-[0.98]">
            View All Logs
          </button>
        </div>

        <div className="lg:col-span-7 minimal-card rounded-xl p-8 border border-gray-100 flex flex-col bg-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <h4 className="text-[11px] font-bold text-gray-400 flex items-center gap-3 uppercase tracking-widest">
              <TrendingUp className="w-4 h-4 text-gray-400" />
              Revenue Trend
            </h4>
            <div className="bg-gray-50 p-1 rounded-lg flex gap-1 border border-gray-100">
              {['6 Months', 'Yearly'].map((opt, i) => (
                <button key={opt} className={`px-4 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-tight transition-all ${i === 0 ? 'bg-white text-gray-900 shadow-sm border border-gray-100' : 'text-gray-400 hover:text-gray-900'}`}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-end justify-between gap-4 h-56 min-h-[240px] pb-6 px-2 relative group">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.4] py-1">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-[1px] w-full bg-gray-50" />)}
            </div>
            {[40, 55, 50, 75, 85, 95].map((h, i) => (
              <div 
                key={i} 
                className={`flex-1 rounded-md transition-all duration-700 relative group/bar cursor-pointer ${i === 5 ? 'bg-gray-900' : 'bg-gray-100 hover:bg-gray-200'}`} 
                style={{ height: `${h}%` }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white font-bold text-[10px] px-2.5 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-all whitespace-nowrap z-20 shadow-lg pointer-events-none uppercase tracking-tight">
                  RM {(h * 150).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[11px] font-bold text-gray-400 tracking-tight uppercase px-4 pt-4 border-t border-gray-50 mt-4">
            {['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map((m, i) => (
              <span key={m} className={i === 5 ? 'text-gray-900' : ''}>{m}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
