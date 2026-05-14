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
    <div className="space-y-8 pb-20">
      {/* Welcome Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">Good morning, Sarah</h2>
          <p className="text-sm text-gray-500 font-medium">Wednesday, 12 June 2024 • Studio A Status: Active</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all active:scale-[0.98]">
            <CheckCircle2 className="w-4 h-4 text-gray-400" />
            Attendance
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all shadow-sm active:scale-[0.98]">
            <Plus className="w-4 h-4" />
            Enroll Student
          </button>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={metric.label} 
            className="minimal-card p-6 rounded-xl flex items-center gap-5 hover:shadow-md cursor-pointer group"
          >
            <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center ${metric.iconColor === 'text-primary' ? 'text-gray-900' : metric.iconColor}`}>
              <metric.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 mb-0.5">{metric.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-gray-900">{metric.value}</span>
                {metric.trend && (
                  <span className="text-[11px] font-medium text-green-600">{metric.trend}</span>
                )}
                {metric.badge && (
                  <span className="text-[10px] font-semibold text-red-500 uppercase tracking-tight">{metric.badge}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline Schedule */}
        <div className="lg:col-span-2 space-y-6">
          <div className="minimal-card rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
              <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                Today's Schedule
              </h3>
              <div className="flex items-center gap-3 text-gray-400 text-xs font-medium uppercase tracking-tight">
                <span>Kuala Lumpur Studio</span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-10 relative">
                <div className="absolute left-16 top-2 bottom-2 w-px bg-gray-100"></div>
                {classes.map((cls) => (
                  <div key={cls.time} className={`flex gap-6 group relative ${cls.opacity || ''}`}>
                    <div className="w-16 text-right py-1">
                      <span className={`text-[11px] font-semibold tracking-tight ${cls.current ? 'text-gray-900' : 'text-gray-400'}`}>{cls.time}</span>
                    </div>
                    <div className="flex-1 relative">
                      {cls.current && (
                        <div className="absolute -left-[30px] top-3.5 w-2 h-2 bg-gray-900 rounded-full border-2 border-white z-10"></div>
                      )}
                      <div className={`p-4 rounded-xl transition-all border ${cls.current ? 'bg-gray-50/80 border-gray-100 shadow-sm' : 'bg-transparent border-transparent hover:bg-gray-50/50 hover:border-gray-100'}`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`w-1.5 h-1.5 rounded-full ${cls.color}`}></span>
                              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{cls.tag}</span>
                            </div>
                            <h4 className="text-base font-semibold text-gray-900 mb-1">{cls.name}</h4>
                            <p className="text-gray-500 text-xs font-medium">Studio {cls.room.split(' ')[1]} • Coach {cls.coach}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-medium text-gray-900">{cls.enrolled}</span>
                            <p className="text-[10px] font-medium text-gray-400 uppercase tracking-tighter mt-0.5">Enrolled</p>
                          </div>
                        </div>
                        {cls.current && (
                          <div className="mt-4 pt-4 border-t border-gray-200/50 flex justify-end">
                            <button className="text-[11px] font-semibold text-gray-900 hover:underline">
                              Manage Attendance
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Side Cards */}
        <div className="space-y-6">
          {/* Quick Updates */}
          <div className="minimal-card rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
              <h4 className="text-xs font-semibold text-gray-900">Recent Messages</h4>
              <button className="text-[11px] text-gray-400 font-medium hover:text-gray-900">View All</button>
            </div>
            <div className="p-6 space-y-6">
              {parentUpdates.map((update) => (
                <div key={update.name} className="flex items-center gap-4 group cursor-pointer">
                  <div className="relative shrink-0">
                    <img className="w-10 h-10 rounded-lg object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all border border-gray-100" src={update.avatar} alt={update.name} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">{update.name.split(' (')[0]}</p>
                    <p className="text-[11px] text-gray-400 font-medium truncate">{update.class}</p>
                  </div>
                  <button className="w-8 h-8 rounded-lg bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all shadow-sm">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
              <button className="w-full py-3 border border-dashed border-gray-200 text-gray-400 font-semibold text-[11px] uppercase tracking-wider rounded-lg hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 mt-2">
                <MessageSquare className="w-3.5 h-3.5" />
                New Broadcast
              </button>
            </div>
          </div>

          {/* Billing Overview */}
          <div className="minimal-card rounded-xl p-6 border-l-4 border-gray-900">
            <div className="flex items-center gap-2 text-gray-900 font-semibold mb-6 text-sm">
              <CreditCard className="w-4 h-4" />
              Revenue Status
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-gray-400">Monthly Target</span>
                <span className="text-gray-900">75% Collected</span>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gray-900 h-full w-[75%] rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Unpaid</p>
                  <p className="text-sm font-semibold text-gray-900">RM 4,250</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Alerts</p>
                  <p className="text-sm font-semibold text-red-500">8 Overdue</p>
                </div>
              </div>
              <button className="w-full py-3 bg-gray-50 border border-gray-100 text-xs font-bold text-gray-900 rounded-lg hover:bg-gray-100 transition-all mt-2">
                Review Payments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
