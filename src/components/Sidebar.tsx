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
    <aside className="fixed left-0 top-0 h-full w-[260px] border-r border-gray-100 bg-white flex flex-col py-8 px-4 z-50">
      <div className="px-4 mb-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
            <Palette className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-tight text-gray-900">Studio Hub</h1>
            <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">Management v1.0</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all text-sm font-medium ${
              currentView === item.id 
                ? 'bg-gray-50 text-gray-900' 
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50/50'
            }`}
          >
            <item.icon className="w-4.5 h-4.5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-8 px-2 mb-8">
        <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2.5 px-4 rounded-lg text-xs font-semibold hover:bg-gray-800 transition-all">
          <Plus className="w-4 h-4" />
          New Class
        </button>
      </div>

      <div className="pt-6 mt-4 border-t border-gray-100 space-y-1">
        {bottomItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all text-sm font-medium ${
              currentView === item.id 
                ? 'bg-gray-50 text-gray-900' 
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50/50'
            }`}
          >
            <item.icon className="w-4.5 h-4.5" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
