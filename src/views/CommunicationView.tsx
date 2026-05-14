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
    <div className="space-y-8 pb-20">
      <header>
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">Parent Communication</h2>
        <p className="text-sm text-gray-500 font-medium">Broadcast messages and manage parent updates</p>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Templates & Stats */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="minimal-card p-6 rounded-xl shadow-sm bg-white border border-gray-100">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-50">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gray-400" />
                Message Templates
              </h3>
            </div>
            
            <div className="space-y-3">
              {templates.map((tpl, i) => (
                <motion.button 
                  whileHover={{ y: -1 }}
                  key={i} 
                  className="group text-left p-4 rounded-xl border border-transparent bg-gray-50 hover:bg-white hover:border-gray-200 transition-all w-full active:scale-[0.98] shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-1.5 rounded-md bg-white border border-gray-100 group-hover:border-gray-200 transition-all`}>
                      <tpl.icon className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-900 uppercase tracking-tight">{tpl.title}</span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-medium line-clamp-1 group-hover:text-gray-600 transition-colors">
                    {tpl.desc}
                  </p>
                </motion.button>
              ))}
            </div>
            <button className="mt-6 w-full py-3.5 text-[11px] font-bold uppercase tracking-wider text-gray-500 border border-gray-200 bg-white rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all active:scale-[0.98]">
              Create New Template
            </button>
          </div>

          <motion.div 
            className="minimal-card p-8 rounded-xl bg-gray-900 text-white relative overflow-hidden group shadow-lg"
          >
            <div className="relative z-10">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-4">Reach Rate</h4>
              <div className="flex items-end gap-3 mb-8">
                <span className="text-4xl font-bold tracking-tight">98.2%</span>
                <span className="mb-1 text-[10px] font-bold text-green-400 tracking-tight">+4.1%</span>
              </div>
              <div className="flex gap-2 h-16 items-end px-1">
                {[40, 60, 85, 70, 95].map((h, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 rounded-sm transition-all duration-700 ${i === 4 ? 'bg-white' : 'bg-white/10'}`} 
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <Layers className="absolute -right-8 -bottom-8 w-40 h-40 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
          </motion.div>
        </div>

        {/* Center: Compose */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
          <div className="minimal-card p-8 rounded-xl shadow-sm bg-white border border-gray-100 flex flex-col h-full group border-l-4 border-gray-900">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-4 border-b border-gray-50 gap-4">
              <h3 className="text-xs font-bold text-gray-900 tracking-widest flex items-center gap-3 uppercase">
                Compose Message
              </h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-500 font-bold text-[10px] uppercase tracking-wider hover:bg-gray-50 hover:text-gray-900 transition-all active:scale-[0.98]">
                  Drafts
                </button>
              </div>
            </div>

            <div className="space-y-8 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'all', label: 'Broadcast to All', icon: Users, active: true },
                  { id: 'class', label: 'Select Class', icon: Layers },
                  { id: 'solo', label: 'Individual Student', icon: MessageCircle },
                ].map((opt) => (
                  <label key={opt.id} className={`cursor-pointer border rounded-xl p-6 flex flex-col items-center gap-4 transition-all relative group/opt ${
                    opt.active ? 'bg-gray-50 border-gray-200 shadow-sm' : 'bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50/50'
                  }`}>
                    <input name="recipient" type="radio" className="hidden" defaultChecked={opt.active} />
                    <div className={`p-3 rounded-lg transition-all ${opt.active ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <opt.icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-tight ${opt.active ? 'text-gray-900' : 'text-gray-400'}`}>{opt.label}</span>
                    {opt.active && (
                       <div className="absolute top-0 right-0 p-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gray-900" />
                       </div>
                    )}
                  </label>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message Payload</label>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter">Character Limit: 1000</span>
                </div>
                <div className="minimal-card rounded-xl p-6 min-h-[360px] bg-gray-50/50 border border-gray-100 flex flex-col group/editor focus-within:border-gray-900 transition-all">
                  <div className="flex flex-wrap gap-4 mb-6 pb-4 border-b border-gray-100 items-center">
                    <button className="p-2 border border-transparent hover:border-gray-200 rounded text-gray-400 hover:text-gray-900 transition-all"><Bold className="w-4 h-4" /></button>
                    <button className="p-2 border border-transparent hover:border-gray-200 rounded text-gray-400 hover:text-gray-900 transition-all"><Italic className="w-4 h-4" /></button>
                    <button className="p-2 border border-transparent hover:border-gray-200 rounded text-gray-400 hover:text-gray-900 transition-all"><Link className="w-4 h-4" /></button>
                    <div className="w-[1px] bg-gray-200 h-4 mx-1" />
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 text-gray-500 rounded text-[10px] font-bold uppercase tracking-tight hover:text-gray-900 hover:border-gray-300 transition-all">
                      <Variable className="w-3 h-3" />
                      Add Field
                    </button>
                  </div>
                  <textarea 
                    className="w-full bg-transparent border-none focus:ring-0 p-0 text-gray-900 font-medium text-base uppercase tracking-tight min-h-[220px] resize-none placeholder:text-gray-300 placeholder:normal-case" 
                    placeholder="Type your message here..."
                  />
                  <div className="mt-4 flex justify-end opacity-0 group-focus-within/editor:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 uppercase tracking-tight">
                       <CheckCircle2 className="w-3.5 h-3.5" />
                       Draft saved
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                <div className="flex gap-8 w-full md:w-auto">
                  <label className="flex items-center gap-3 cursor-pointer group/cb">
                    <input defaultChecked className="peer hidden" type="checkbox" />
                    <div className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center transition-all bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900">
                       <CheckCircle2 className="opacity-0 peer-checked:opacity-100 w-4 h-4 text-white transition-opacity" />
                    </div>
                    <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-tight text-gray-400 peer-checked:text-gray-900 transition-colors">
                      <MessageCircle className="w-4 h-4 text-green-600" /> WhatsApp
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group/cb">
                    <input className="peer hidden" type="checkbox" />
                    <div className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center transition-all bg-white peer-checked:bg-gray-900 peer-checked:border-gray-900">
                       <CheckCircle2 className="opacity-0 peer-checked:opacity-100 w-4 h-4 text-white transition-opacity" />
                    </div>
                    <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-tight text-gray-400 peer-checked:text-gray-900 transition-colors">
                      <Mail className="w-4 h-4 text-gray-400" /> Email
                    </span>
                  </label>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                  <button className="flex-1 md:flex-none px-6 py-3.5 rounded-lg border border-gray-200 bg-white text-gray-500 font-bold text-[11px] uppercase tracking-wider hover:bg-gray-50 transition-all active:scale-[0.98]">Schedule</button>
                  <button className="flex-1 md:flex-none px-8 py-3.5 rounded-lg bg-gray-900 text-white font-bold text-[11px] uppercase tracking-widest hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group">
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Log */}
        <div className="col-span-12">
          <div className="minimal-card rounded-xl shadow-sm overflow-hidden bg-white border border-gray-100 group border-t-2 border-gray-900">
            <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-[0.2em]">Message History</h3>
              <button className="flex items-center gap-2 text-gray-400 hover:text-gray-900 font-bold text-[11px] uppercase tracking-wider transition-all">
                Full Archive
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Recipient</th>
                    <th className="py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Type</th>
                    <th className="py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Time</th>
                    <th className="py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Channels</th>
                    <th className="py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">View</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {logs.map((log, i) => (
                    <tr key={i} className="hover:bg-gray-50/30 transition-all group/row cursor-pointer">
                      <td className="py-5 px-8">
                        <div className="flex items-center gap-4">
                          {log.avatar ? (
                            <img className="w-10 h-10 rounded-lg object-cover grayscale opacity-80 group-hover/row:grayscale-0 group-hover/row:opacity-100 border border-gray-100 transition-all" src={log.avatar} alt={log.recipient} />
                          ) : (
                            <div className={`w-10 h-10 rounded-lg border border-gray-100 bg-gray-50 text-gray-400 flex items-center justify-center transition-all group-hover/row:bg-gray-100 group-hover/row:text-gray-900`}>
                              {log.isGroup ? <Users className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                            </div>
                          )}
                          <span className="text-sm font-bold text-gray-900 uppercase tracking-tight group-hover/row:text-blue-600 transition-colors leading-none">{log.recipient}</span>
                        </div>
                      </td>
                      <td className="py-5 px-8 text-[10px] font-bold text-gray-400 uppercase tracking-tight">{log.type}</td>
                      <td className="py-5 px-8 text-[11px] font-bold text-gray-300 uppercase tracking-tighter">{log.time}</td>
                      <td className="py-5 px-8">
                        <div className="flex gap-4">
                          <MessageCircle className={`w-5 h-5 transition-all ${log.methods[0] ? 'text-green-600' : 'text-gray-100'}`} />
                          <Mail className={`w-5 h-5 transition-all ${log.methods[1] ? 'text-gray-800' : 'text-gray-100'}`} />
                        </div>
                      </td>
                      <td className="py-5 px-8">
                        <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight border ${
                          log.status === 'DELIVERED' || log.status === 'READ' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-amber-50 text-amber-700 border-amber-100'
                        }`}>
                          {log.status}
                        </span>
                      </td>
                      <td className="py-5 px-8 text-right">
                        <button className="p-2.5 bg-white border border-gray-200 rounded-lg text-gray-300 hover:text-gray-900 hover:border-gray-900 transition-all active:scale-95">
                          <Eye className="w-4 h-4" />
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
