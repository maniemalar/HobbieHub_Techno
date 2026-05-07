import React from 'react';
import { 
  Palette, 
  LayoutDashboard, 
  CalendarDays, 
  Users, 
  CreditCard, 
  MessageSquare, 
  Settings, 
  HelpCircle,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export default function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'classes', label: 'Classes', icon: CalendarDays },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
  ];

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help', icon: HelpCircle },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col py-8 px-4 z-50">
      <div className="px-4 mb-12">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            <Palette className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xs font-bold tracking-[0.4em] uppercase text-white">HobbyHub</h1>
            <p className="text-[9px] uppercase tracking-widest text-primary font-mono">Artisan Command Center</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 relative group overflow-hidden ${
              currentView === item.id 
                ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]' 
                : 'text-white/40 hover:text-white/80 hover:bg-white/5'
            }`}
          >
            {currentView === item.id && (
              <motion.div 
                layoutId="sidebar-active-pill"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary shadow-[0_0_10px_rgba(34,211,238,0.8)] rounded-r-full"
              />
            )}
            <item.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${currentView === item.id ? 'text-primary' : 'text-current'}`} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-8 px-4 mb-8">
        <button className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white py-3.5 px-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all group overflow-hidden relative">
          <Plus className="w-5 h-5 group-hover:scale-125 transition-transform" />
          New Class
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      <div className="pt-8 mt-4 border-t border-white/5 space-y-2">
        {bottomItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
              currentView === item.id 
                ? 'bg-primary/10 text-primary' 
                : 'text-white/40 hover:text-white/80 hover:bg-white/5'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
